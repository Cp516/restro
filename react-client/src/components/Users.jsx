



import React from 'react';


const Users = (props) => (
  <select>
    {Object.keys(props.list).map((user, idx )=> {
      return <option key={idx}>{user}</option>
    })}
  </select>
)

export default Users;
    