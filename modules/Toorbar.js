import React from 'react';
import {showAddDeck,filterCards} from '../actions';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const mapDispatchToProps=dispatch=>({
	showAddDeck:()=>dispatch(showAddDeck()),
	onFilter:query=>dispatch(filterCards(query))
});

const Toolbar =({deckId,showAddDeck,onFilter})=>{
	let deckTools=deckId?(
		<div className="header_rBtn">
			<Link className="" to={`/deck/${deckId}/new`}>新建项目分支</Link>
			<input
				type="search" 
				onChange={e=>onFilter(e.target.value)}
				className="search"
				placeholder="search..."
			/>
		</div>

	):null;
	return(
		<div className="toolbar">
			<div className="header_lBtn">
				<button onClick={showAddDeck}>新建项目</button>
			</div>
			{deckTools}
		</div>
	);
}

export default connect(null,mapDispatchToProps)(Toolbar);

