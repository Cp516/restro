










import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Where are you </h4>
    There are {props.restros.length } items.
    {console.log(props.restro)}
    {props.restros.map((restro, idx)=>{return <ListItem restro={restro} key={idx} func={props.func}/>})}
    {/*<ListItem/>*/}
  </div>
)

export default List;
    
  



{/*{ props.items.map(item => <ListItem item={item}/>)}*/}