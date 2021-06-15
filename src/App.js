import React from 'react';
import './App.css';


import ContactList from './Components/ContactList'
import 'tachyons';

class App extends React.Component {

    render(){
      return (
            <div className="App">
                <ContactList/>
            </div>
            );
    }

  
}

export default App;
