import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";


const GET_USER_PROFILE = gql`
    query GetUser($auth0id: String!){
      user(auth0id: $auth0id) {
        email
      }
    }
`;

const Profile = (props) => (

  <Query query={GET_USER_PROFILE} variables={{  auth0id:props.auth0id }}>
      {({ loading, error, data }) => {
        //console.log(props.auth0Id);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(  {console.log("error",error)} </p>;
          console.log(data)
        return (
            <div style={{color: "black"}} >Hi, {data.user.email}</div>
        )
      }}
  </Query>
);
export default Profile;