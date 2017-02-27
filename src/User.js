import React, { Component } from 'react';

import moment from 'moment';

const User = ({ username, stripe_id, sub_end, created }) => {
  return(
    <div>
      <h1>{ username }</h1>
      <p>{ stripe_id }</p>
      <p>SUB END: { moment(sub_end).endOf('day').fromNow() }</p>
      <p >CREATED: { moment(created).endOf('day').fromNow() }</p>

    </div>
  )
}

export default User;
