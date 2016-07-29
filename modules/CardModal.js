import React from 'react';
import ReactDOM from 'react-dom';
import {Link,browserHistory} from 'react-router';


const CardModal=React.createClass({
	componentDidUpdate(){
		ReactDOM.findDOMNode(this.refs.front).focus();
	},
	render(){
		let {card,onDelete}=this.props;
		return(
			<div className="modal">
				<div className="mask"></div>
				<div className="modal_con">
					<h1>{onDelete?'编辑':'新建'} 项目分支情况</h1>
					<label for="">项目分支名称</label>
					<br />
					<textarea ref='front' defaultValue={card.front}></textarea>
					<br />
					<label for="">项目分支内容</label>
					<br />
					<textarea ref='back' defaultValue={card.back}></textarea>
					<p>
						<button onClick={this.onSave}>保存项目分支</button>
						<Link className="btn" to={`/deck/${card.deckId}`}>取消</Link>
						{onDelete?
							<button onClick={this.onDelete} className='delete'>删除项目分支</button>:null
						}
					</p>
				</div>
			</div>
		);
	},
	onSave(e){
		let front=ReactDOM.findDOMNode(this.refs.front);
		let back=ReactDOM.findDOMNode(this.refs.back);
		
		console.log(Object.assign({}, this.props.card,{
			front:front.value,
			back:back.value
		}));
		
		this.props.onSave(Object.assign({}, this.props.card,{
			front:front.value,
			back:back.value
		}));
		
		browserHistory.push(`/deck/${this.props.card.deckId}`);
	},
	onDelete(e){
		this.props.onDelete(this.props.card.id);
		browserHistory.push(`/deck/${this.props.card.deckId}`);
	}
});

export default CardModal;
