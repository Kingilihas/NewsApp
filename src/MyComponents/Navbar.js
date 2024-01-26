import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Context from './ContextState'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

export class Navbar extends Component {
  static propTypes = {

  }

  static contextType =Context
  

  toggleMode=()=>{
    let value = this.context;
    console.log(value);
  }






  


  render() {
    
  

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">newsMonkey.com</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link  active" aria-current="page" to="/">Home</Link >
                </li>


                <li className="nav-item"> <Link className="nav-link " to="/business">Business</Link> </li>
                <li className="nav-item"> <Link className="nav-link " to="/entertainment">Entertainment</Link> </li>
                <li className="nav-item"> <Link className="nav-link " to="/general">General</Link> </li>
                <li className="nav-item"> <Link className="nav-link " to="/health">Health</Link> </li>
                <li className="nav-item"> <Link className="nav-link " to="/science">Science</Link> </li>
                <li className="nav-item"> <Link className="nav-link " to="/sports">Sports</Link> </li>
                <li className="nav-item"> <Link className="nav-link " to="/technology">Technology</Link> </li>

            

              </ul>
               <div className="form-check form-switch form-check-reverse">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse"  onClick={this.toggleMode}/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckReverse"  >Dark Mode</label>
                </div> 

            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar
