import React, { Component } from 'react';

const User = ({ user }) => {
  if ( user.stripe_id ){
  return(
    <div>
      <h1>{user.username}</h1>
      <p>{user.stripe_id}</p>
      <p>{user.sub_end}</p>
    </div>
  )
} else {
  return (
    <div>
      <h1>{user.username}</h1>
      <p>NO STRIPE</p>
      <p>{user.sub_end}</p>
    </div>

  )
}
}

export default User;
