import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      player: []
    };
  }

  title() {
    this.setState({
      title: this.refs.searchbar.value
    });
  }

  search() {
    axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${this.state.title}`)
      .then((res) => {
        console.log(res);
        this.setState({ player: res.data.player })
      })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    const data = this.state.player.map((item, index) => {
      return (
        <div className="container" key={item.idPlayer}>
          <div className="card">

            <div className="card-header bg-primary text-white text-center"  >
              <h3 className="card-title">
                {item.strPlayer} &nbsp;
                  
                  (<i> {item.strPosition}</i>)
                  
              </h3>
            </div>

            <div className="card-block">
              <div className="row">
                <div className="image col-md-4">
                  <img src={item.strCutout} />
                </div>


                <div className="description col-md-8">
                  {item.strDescriptionEN}
                </div>



                </div>
              </div>
            </div>
          </div>

          )
        })
    
    
    
    
    
      return (
      <div className="container">
            <center>
              <h1> Daftar Pemain {this.state.title} </h1>
              <input ref="searchbar" type="text" onInput={() => {
                this.title();
              }} />
              
              <button type="button" class="btn btn-success"id="search" onClick={() => {
                this.search();
                  }}>
                Lihat Daftar
              </button>
            </center >

            <div className="content">
              {data}
            </div>

          </div>





          );
        }
      }
      
      
      
      
      export default App;
