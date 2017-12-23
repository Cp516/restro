










import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div >
    <h4> Where are you </h4>
    There are {props.restros.length } items.
    {/*{console.log(props.restro)}*/}
    {/*{console.log(props.clickRestro)}*/}
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {props.restros.map((restro, idx, restros)=>{return <ListItem restros={restros} restro={restro} idx={idx} key={idx} clickRestro={props.clickRestro} />})}
    </div>
    {/*<ListItem/>*/}
  </div>
)

export default List;
    
  



{/*{ props.items.map(item => <ListItem item={item}/>)}*/}