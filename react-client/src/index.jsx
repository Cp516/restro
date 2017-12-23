







import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Users from './components/Users.jsx';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      restros: [],
      name: '',
      users: {}
    }
    this.clickRestro = this.clickRestro.bind(this);
    this.userChange = this.userChange.bind(this);
  }

  clickRestro (restro){
    // console.log('===$@%#$@#%@#$%=====>',restro)
    $.ajax({
      method: 'post',
      url: '/wish',
      contentType: 'application/json',
      data: JSON.stringify({
        restro: restro,
        name: this.state.name
      })
    })
  };
  userlist(){
    $.ajax({
    method: 'post',
      url: '/'
    }).done((data)=>{
      data.forEach((element)=> {
        if(!this.state.users[element.user]){
          this.state.users[element.user] = true
          console.log(this.state.users)
          // var selected = $('#test option:selected').val()
          // console.log('selected:', selected)
        }
      });
      this.setState({users: this.state.users})
    })
  }

  userChange (e) {
    // console.log(e.target.value)
    var val = e.target.value
    console.log(val);
    this.setState({name: val},()=>{
      $.ajax({
        method: 'get',
        url: '/user',
        contentType: 'application/json',
        data:{
          name: this.state.name
        }
      }).done((data)=>{this.setState({restros: data},()=>{console.log(this.state.restros)})});
    })
    
  };


componentDidMount(){
  $.ajax({
    method: 'post',
      url: '/'
  }).done((data)=>{
      data.forEach((element)=> {
        if(!this.state.users[element.user]){
          this.state.users[element.user] = true
          console.log(this.state.users)
          // var selected = $('#test option:selected').val()
          // console.log('selected:', selected)
        }
      });
      this.setState({users: this.state.users})
    })

  $('#chrisForm').on('submit', (e)=>{
    e.preventDefault();
    $.ajax({
      method: 'post',
      url: '/search',
      contentType: 'application/json',
      data: JSON.stringify({
        name: $('input[name=firstname]').val(),
        location: $('input[name=location]').val(),
        miles: $('#distance option:selected').val(),
        category: $('#cate option:selected').text()
      })
    }).done((data) => {
      console.log('back in the client')
      // console.log(data)
      this.setState({restros: data.businesses});
      this.setState({name: $('input[name=firstname]').val()})
      console.log(this.state)
    });

  });
console.log(this.state.name)
}

  render () {
    return (<div>
      <h1>Restro</h1>

      <Users list={this.state.users} userChange={this.userChange}/>

      <form id="chrisForm" action="/" method="POST">
        Name:<br/>
        <input type="text" name="firstname" required/>
        <br/>
        Location:<br/>
        <input type="text" name="location" required/>

        <select id="distance">
          <option value="5">5 mi</option>
          <option value="10">10 mi</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        
        <select id="cate">
          <option value="Chinese">Chinese</option>
          <option value="American">American</option>
          <option value="Italian">Italian</option>
          <option value="Thai">Thai</option>
          <option value="Indian">Indian</option>
          <option value="Spanish">Spanish</option>
        </select>


        <br/><br/>
        <input type="submit" value="Submit"/>
      </form> 

      

      <List restros={this.state.restros} clickRestro={this.clickRestro}/>
    </div>)
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
// $("#chrisForm").submit(function(e) {
//     e.preventDefault();
// });




// axios.post('/search', {
    //     name: $('input[name=firstname]').val(),
    //     location: $('input[name=location]').val(),
    //     miles: $('#distance option:selected').val(),
    //     category: $('#cate option:selected').text()
    //   }
    //   ).then((data) => {
    //   console.log('back in the client')
    //   console.log(data)
    //   this.setState({restros: data.businesses});
    //   this.setState({name: $('input[name=firstname]').val()})
    //   console.log(this.state)
    // })


  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }
// axios.post('/search', {
//   name: $('input[name=firstname]').val(),
//   location: $('input[name=location]').val(),
//   miles: $('#distance option:selected').text(),
//   category: $('#cate option:selected').text()
// })