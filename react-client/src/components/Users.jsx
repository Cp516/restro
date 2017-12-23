
import $ from 'jquery';



import React from 'react';


const Users = (props) => (
  <select id="test" onChange={props.userChange}>
    <option>none</option>
    {Object.keys(props.list).map((user, idx )=> {
      return <option key={idx} >{user}</option>
    })}
  </select>
)

;
export default Users;
    