import React, { Component } from 'react';
import './App.css';
import { FormattedMessage } from 'react-intl'


class App extends Component {
  render() {
    return (
      <div>
        <FormattedMessage
          id="app.welcome" /><br/><hr/>
        {/*
          Renders:
            <span>Bienvenue !</span>
        */}

        <FormattedMessage
          id="app.greeting_message"
          values={{ name: 'kunnix' }} /><br/><hr/>
        {/*
          Renders:
            <span>Salut kunnix, ça va ?</span>
        */}

        <FormattedMessage
          id="app.greeting_message"
          values={{ name: <b>kunnix</b> }} /><br/><hr/>
        {/*
          Renders:
            <span>Salut <b>kunnix</b>, ça va ?</span>
        */}

        <FormattedMessage
          id="app.greeting_message"
          values={{ name: 'kunnix' }}>
            {(message) => <input type="text" placeholder={message} />}
        </FormattedMessage>
        {/*
          Renders:
            <input type="text" placeholder="Salut kunnix, ça va ?" />
        */}
      </div>
    );
  }
}


export default App;
