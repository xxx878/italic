import React from 'react';


import Cards from './Components/Card/Cards/Cards';
import Picture from './Components/Card/Picture/Picture';
import Header from './Components/Header/Header';






function App(){
  return ( 
      <div className='App'>
        <Header />
        <Picture />
        <Cards/>
      </div>
    );
}

export default App;
