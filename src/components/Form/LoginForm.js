import React from 'react';
import { gql, graphql } from 'react-apollo';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../../constants'

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
          placeholder="E-mail address"
          type="email"
          className="bordered-input form-item"
        />
        <input
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
          type="password"
          placeholder="Password"
          className="bordered-input form-item"
        />
        <div className="form-item">
          <label className="control control-checkbox">
            Remember me
            <input type="checkbox" />
            <div className="control_indicator"></div>
          </label>
          <a href="/">Forgot password</a>
        </div>
        <div onClick={() => this.submitHandler()} className="btn btn-green">Log in</div>
      </div>
    )
  }

  async submitHandler() {
    const { email, password } = this.state;
    const result = await this.props.login({
      variables: {
        email,
        password
      }
    });
    const id = result.data.signinUser.user.id;
    const token = result.data.signinUser.token;
    this.saveUserData(id, token);
    window.location.reload();
  };

  saveUserData(id, token) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
  }
}

const LOGIN_USER_MUTATION = gql`
    mutation SigninUserMutation($email: String!, $password: String!) {
        signinUser(email: {
            email: $email,
            password: $password
        }) {
            token
            user {
                id
            }
        }
    }
`;

export default graphql(LOGIN_USER_MUTATION, { name: 'login' })(Login)