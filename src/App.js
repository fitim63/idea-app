import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Switch} from "react-router";
import Home from "./components/Home";
import Info from "./components/Info";
import Location from "./components/Location";
import Fair from "./components/Fair";
import Video from "./components/Video";
import Card from "./components/Card";
import Login from "./components/login/Login";
import {ProtectedRoute} from "./components/utilscomponents/ProtectedRoute";

const App = () => {
    return (
            <div className="d-flex flex-column min-vh-100">
            <Header/>
                <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/info" component={Info}/>
                    <ProtectedRoute path="/lokacioni" component={Location}/>
                    <Route path="/panairi" component={Fair}/>
                    <Route path="/video" component={Video}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/shporta" component={Card}/>
                </Switch>
                <Footer/>
            </div>
    );
};

export default App;
