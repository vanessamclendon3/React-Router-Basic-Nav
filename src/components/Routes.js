import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Contact, About } from '../components';


const Routes = () =>{
    return(
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact}/>
        </div>
    );
}

export default Routes;
