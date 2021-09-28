import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "../components/Header/Header";
import ShipsView from "../views/ShipsView";
import Ship from "../components/Ship/Ship";
import Home from "../components/Home/Home";

const  App = ():JSX.Element=> {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/ships"} component={ShipsView}/>
                <Route exact path={"/ships/:id"} component={Ship}/>
            </Switch>
        </div>
    );
}

export default App;
