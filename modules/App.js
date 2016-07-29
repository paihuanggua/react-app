import React from 'react';
import Sidebar from './Sidebar';
import {connect} from 'react-redux';

import Toorbar from './Toorbar';

const mapStateToProps=(props,{params:{deckId}})=>({
	deckId
})


const App=({deckId,children})=>{
  return(
    <div className="app">
    	<Toorbar deckId={deckId} />
    	<Sidebar />
    	{children}
    </div>
  );
}

export default connect(mapStateToProps)(App);
