import React, { Component } from 'react';

const User = ({ username, stripe_id, sub_end, created }) => {
  return(
    <div>
      <h1>{ username }</h1>
      <p>{ stripe_id }</p>
      <p>SUB END: { sub_end }</p>
      <p >CREATED: { created }</p>

    </div>
  )
}

export default User;
