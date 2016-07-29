import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {addDeck,hideAddDeck,showAddDeck} from '../actions';

//需要props的值
// decks={state.decks}
// addingDeck={state.addingDeck}

// addDeck={(name)=>store.dispatch(addDeck(name))}
// showAddDeck={()=>store.dispatch(showAddDeck())}
// hideAddDeck={()=>store.dispatch(hideAddDeck())}



const mapStateToProps=({decks,addingDeck})=>({
	decks,
	addingDeck	
})
//和上面一样
// const mapStateToProps=state=>{
// 	return{
// 		decks:state.decks,
// 		addingDeck:state.addingDeck
// 	}
// }



const mapDispatchToProps=dispatch=>({
	addDeck:name=>dispatch(addDeck(name)),
	showAddDeck:()=>dispatch(showAddDeck()),
	hideAddDeck:()=>dispatch(hideAddDeck())	
});
//和上面一样
// const mapDispatchToProps=dispatch=>{
// 	return{
// 		addDeck:name=>dispatch(addDeck(name)),
// 		showAddDeck:()=>dispatch(showAddDeck()),
// 		hideAddDeck:()=>dispatch(hideAddDeck())	
// 	}
// }






const Sidebar=React.createClass({
	render(){
		// console.log('渲染Sidebar');
		// console.log(this.props.addingDeck);
		return(
			<div className="sidebar">
				<h2>所有项目</h2>
				<ul>
					{this.props.decks.map((deck,i)=>
						<li key={i}>
							<Link to={`/deck/${deck.id}`}>{deck.name}</Link>
						</li>
					)}
				</ul>
				{this.props.addingDeck && <input type="text" ref="add" onKeyPress={this.createDeck} />}
			</div>
		)
	},
	createDeck(e){
		if(e.which!==13) return;
		var name=ReactDOM.findDOMNode(this.refs.add).value;
		this.props.addDeck(name);
		this.props.hideAddDeck();
	},
	componentDidUpdate(){
		let el=ReactDOM.findDOMNode(this.refs.add);
		if(el) el.focus();
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);
