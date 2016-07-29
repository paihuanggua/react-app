import React from 'react';
import {Link} from 'react-router';

const Card =({card})=>{
	return(
		<div className="card">
			<p>{card.front}</p>
			{card.deckId}
			<Link className="btn" to={`/deck/${card.deckId}/edit/${card.id}`}>编辑</Link>
		</div>
	);
}
export default Card;