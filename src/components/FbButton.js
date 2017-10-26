import React from 'react';
import FacebookLogin from 'react-facebook-login';
 
  class FbButton extends React.Component {
    responseFacebook(response) {
      console.log(response);
    }
 
    render() {
      return (
        <FacebookLogin
          appId="1559368997511322"
          autoLoad={true}
          textButton=""
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      )
    }
  }

  export default FbButton;