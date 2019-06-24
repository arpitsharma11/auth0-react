import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
const Profile = () => (
  <Query
    query={gql`
      {
        user(auth0id: "auth-123") {
          firstName
          lastName
          email
          maritalStatus
        }
      }
      
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(  {console.log("error",error)} </p>;
        console.log(data)
    }}
  </Query>
);
export default Profile;
