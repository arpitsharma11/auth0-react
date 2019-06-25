import React from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";


const CREATE_USER = gql`
  mutation CreateUser($auth0id: String!, $email: String!) {
    createUser(auth0id: $auth0id, email: $email) {
      email
    }
  }
`;

const SignupProfile = (props) => (

<Mutation mutation={CREATE_USER} variables={{  auth0id:props.auth0id, email:props.email }}>
    {({ loading, error, data }) => {
      console.log(props.auth0Id);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(  {console.log("error",error)} </p>;
        console.log(data)
      return (
          <div>Yo</div>
      )
    }}
  </Mutation>
);
export default SignupProfile;