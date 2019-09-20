import React from 'react'
import routes from "../routes.js"
import { Route, Switch } from "react-router-dom";
import Sidebar from '../components/Sidebar'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "black",
            activeColor: "info"
        };
        this.mainPanel = React.createRef();
    }

    render() {
        return (
            <div className="wrapper">
                <Sidebar
                    {...this.props}
                    routes={routes}
                    bgColor={this.state.backgroundColor}
                    activeColor={this.state.activeColor}
                />
                <div className="main-panel" ref={this.mainPanel}>
                    <Header {...this.props} />
                    <Switch>
                        <div className="content">
                            {routes.map((prop, key) => {
                                return (
                                    <Route
                                        path={prop.layout + prop.path}
                                        component={prop.component}
                                        key={key}
                                    />
                                );
                            })}
                        </div>
                    </Switch>
                    <Footer fluid />
                </div>
            </div>
        )
    }
}