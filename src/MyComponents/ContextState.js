import React from "react";

import { createContext } from "react";

const Context = React.createContext();

class ContextState extends React.Component {
    constructor(props) {

        super(props);
            this.state = {
                mode:'dark'
            }

        }

       
    
    render() {
        return (
            <Context.Provider value={this.state.mode}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default ContextState;