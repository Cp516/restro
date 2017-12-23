







import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      restros: [],
      visited: [],
      wishList: []

    },
    this.func = ()=>{
      this.
    }
  }

componentDidMount(){
  $('#chrisForm').on('submit', (e)=>{
    e.preventDefault();
    $.ajax({
      method: 'post',
      url: '/search',
      contentType: 'application/json',
      data: JSON.stringify({
        name: $('input[name=firstname]').val(),
        location: $('input[name=location]').val(),
        miles: $('#distance option:selected').text(),
        category: $('#cate option:selected').text()
      })
    }).done((data) => {
      console.log('back in the client')
      this.setState({restros: data.businesses});
    });
  });
}

  render () {
    return (<div>
      <h1>Restro</h1>

      <form id="chrisForm" action="/" method="POST">
        Name:<br/>
        <input type="text" name="firstname" />
        <br/>
        Location:<br/>
        <input type="text" name="location" />

        <select id="distance">
          <option value="5">5</option>
          <option value="10">10</option>
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


      <List restros={this.state.restros}/>
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

// $("#chrisForm").submit(function(e) {
//     e.preventDefault();
// });







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