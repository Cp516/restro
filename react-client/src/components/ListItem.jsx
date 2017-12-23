






import React from 'react';

const ListItem = (props) => (
  <div onClick={()=> props.clickRestro(props.restro)}>
    <div>
      <img src={props.restro.image_url} alt="Smiley face" height="150" width="150"/>
    </div>
  {/*{console.log(props.restro)}*/}
    <p>{props.restro.name}</p>
    <p>{props.restro.phone}</p>
    <p>{props.restro.location.address1}</p>
    <p>{props.restro.location.city}</p>
    <p>{props.restro.location.state}</p>
    <p>{props.restro.location.zip_code}</p>
  </div>
)

export default ListItem;
    
  







{/*{ props.item.description }*/}