






import React from 'react';

const ListItem = (props) => (
  <div   style={{ padding:15, margin: 15, border: '1px solid red'}}>
    
    <img src={props.restro.image_url} alt="Restro" height="170" width="170"/>
    <figcaption>
      {props.restro.name}
      <br/> {props.restro.phone}<br/>
      {props.restro.location.address1}<br/>
      {props.restro.location.city}, {props.restro.location.state}, {props.restro.location.zip_code}<br/>
    </figcaption>
  <button onClick={()=> props.clickRestro(props.restro)}>Must Go!</button>
  {/*<button onClick={()=> props.clickRestro(props.restro)}>Already Been!</button>*/}
    
  </div>
)

export default ListItem;
    
  







{/*{ props.item.description }*/}