import React from 'react';
import {Hall, Home} from "./index";
import Clock from "./components/Clock/Clock";


const App = (props) => {
    return(
        <div>
            <Home />
            <Hall />
            <Clock store={props.store} />
        </div>
    )
}

export default App;