
import './App.css';

import React, { Component } from 'react'
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';



export default class App extends Component {
  static defaultProps = {

   
    mode:'light',
    toggleMode:()=>{

    }


  }

  static propTypes = {

    
mode: PropTypes.string,
toggleMode: PropTypes.func
  }

 
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  constructor(props) {
    super(props);
    this.state={
      progress:0,
      mode:'light'
    }  
    
  }


apiKey = process.env.REACT_APP_NEWS_API_KEY;
toggleMode=()=>{
  if(this.state.mode==='light'){
    this.setState({mode:'Dark'})
  }
  else{
    this.setState({mode:'light'})
  }

}

  render() {
    
    return (
      <div>
        <Navbar   />
        

        {/* <DailyCovid /> */}
        <Routes>

          <Route  path="/" element={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" />} />
          <Route  path="/science" element={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="science" pageSize={6} country="in" category="science" />} />
          <Route  path="/health" element={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="health" pageSize={6} country="in" category="health" />} />
          <Route  path="/entertainment" element={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route  path="/sports" element={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="sports" pageSize={6} country="in" category="sports" />} />
          <Route  path="/technology" element={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="technology" pageSize={6} country="in" category="technology" />} />
          <Route  path="/business" element={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="business" pageSize={6} country="in" category="business" />} />
          <Route  path="/general" element={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" />} />
        </Routes>
      </div>
    )
  }
}

