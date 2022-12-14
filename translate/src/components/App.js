import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: "english" }; //this is default value to show language when we open the page.

  onLanguageChange = language => {
    this.setState({ language }); //this is function for selected language to show on the page.
  }



  render() {
    return <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => this.onLanguageChange("english")} />
        <i className="flag nl" onClick={() => this.onLanguageChange("dutch")} />
      </div>
      <ColorContext.Provider value="green">
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>;
  }
}

export default App;
