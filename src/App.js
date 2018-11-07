import React, { Component } from 'react';
import './App.css';
import Menubar from './component/Menubar';
import Content from './component/contents/index'
import Footer from './component/Footer';
import Axios from 'axios';
import Home from './pages/home';
import {  BrowserRouter,  Route } from 'react-router-dom';
import about from './pages/About'
import film from './pages/Film'
import member from './pages/Member'

import { Provider } from 'react-redux'
import myStore from './config/store'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      members : [],
      films : [],
    }
  }

  fecthAsync = async() => {

    await Axios.get(`https://swapi.co/api/people/`)
    .then(response => response.data.results)
    .then(membersData => {
      this.setState({members: membersData})
    }
    )

    await Axios.get('https://swapi.co/api/films/')
    .then(response => response.data.results)
    .then(filmsData => {
      this.setState({films: filmsData})
    }
    )
  }

  componentDidMount(){
    this.fecthAsync()
  }
  
  render() {
    const { members, films } = this.state
    return (
      <Provider store={myStore}>
      <BrowserRouter>
        <div>
        <Menubar />
        <div style={{ paddingLeft:16, paddingRight:16}}>
          <Route exact path="/" render={() => (
            <Home/>
          )} />
          <Route path="/about" component={about} />
          <Route path="/member/:id" component={member}/>
        </div>
        <Footer />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
