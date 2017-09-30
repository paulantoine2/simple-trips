import React from 'react';
import { gql, graphql } from 'react-apollo';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../../constants'

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
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
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
          placeholder="Username"
          className="bordered-input form-item"
        />
        <input
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
          type="password"
          placeholder="Password"
          className="bordered-input form-item"
        />
        <div onClick={() => this.submitHandler()} className="btn btn-green">Sign up</div>
      </div>
    )
  }

  async submitHandler() {
    const { username, email, password } = this.state;
    const result = await this.props.createUser({
      variables: {
        username,
        email,
        password
      }
    });
    const id = result.data.signinUser.user.id;
    const token = result.data.signinUser.token;
    this.saveUserData(id, token);
  };

  saveUserData(id, token) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
  }
}

const CREATE_USER_MUTATION = gql`
    mutation CreateUserMutation($username: String!, $email: String!, $password: String!) {
        createUser(
            username: $username,
            avatar: "http://placehold.it/96x96",
            authProvider: {
                email: {
                    email: $email,
                    password: $password
                }
            }
        ) {
            id
        }

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

export default graphql(CREATE_USER_MUTATION, { name: 'createUser' })(SignUpForm)