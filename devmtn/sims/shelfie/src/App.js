import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Form from './components/Form'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      selectedId: null
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory').then((res) => {
      this.setState({
        inventory: res.data
      })
    })
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Form getRequest = {this.componentDidMount()}
          selectedId = {this.state.selectedId}
        />
        <Dashboard 
          inventoryList = {this.state.inventory}
          getRequest = {this.componentDidMount()}
        />
       
      </div>
    );
  }
}

export default App;
