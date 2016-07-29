import './style/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import {syncHistoryWithStore,routerReducer} from 'react-router-redux';

import * as reducers from './reducers';
reducers.routing=routerReducer;
import * as localStore from './localStore';

import App from './modules/App'
import VisibleCards from './modules/VisibleCards'
import NewCardModal from './modules/NewCardModal'
import EditCardModal from './modules/EditCardModal'
import StudyModal from './modules/StudyModal'



const store=createStore(combineReducers(reducers),localStore.get());
const history=syncHistoryWithStore(browserHistory,store);

function run(){
	let state=store.getState();
	localStore.set(state,['decks','cards']);
	ReactDOM.render((
		<Provider store={store}>
			<Router history={history}>
			    <Route path="/" component={App}>
			    	<Route path='/deck/:deckId' component={VisibleCards}>
			    		<Route path='/deck/:deckId/new' component={NewCardModal} />
			    		<Route path='/deck/:deckId/edit/:cardId' component={EditCardModal} />
			    		<Route path='/deck/:deckId/study' component={StudyModal} />
			    	</Route>
			    </Route>
			</Router>
		</Provider>
	), document.getElementById('app'))
}
run();
store.subscribe(run);





