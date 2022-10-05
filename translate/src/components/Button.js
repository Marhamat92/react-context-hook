import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

  //this is another way to get data from context object. But we have to use this method when we have single context object. Because we can not use static contextType = LanguageContext; when we have multiple context objects. So we have to use this method.
  // I will create another component and use second method which is consumer method to get data out from context object.

  // static contextType = LanguageContext;

  // render() {
  //   const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
  //   return <button className="ui button primary">{text}</button>

  // }

  //!when we use single context object for 1 component , we use static contextType = LanguageContext(example) way but when we use multiple 
  //!context objects for 1 component, we use consumer method to get data out from context object.

  render() {
    return (
      <ColorContext.Consumer>
        {(color) =>
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    )
  }



}

export default Button;