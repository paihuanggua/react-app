import CardModal from './CardModal';
import {connect} from 'react-redux';
import {updateCard,deleteCard} from '../actions';

const mapStateToProps=({cards},{params:{cardId}})=>({
	card:cards.filter(c=>c.id===parseInt(cardId,10))[0]
});
const mapDispatchToProps=dispatch=>({
	onSave:card=>dispatch(updateCard(card)),
	onDelete:cardId=>dispatch(deleteCard(cardId))
});

export default connect(mapStateToProps,mapDispatchToProps)(CardModal);


