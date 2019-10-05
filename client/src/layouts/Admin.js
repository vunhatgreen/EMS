import React from 'react'
import routes from "../routes.js"
import { Route, Switch } from "react-router-dom";
import Sidebar from '../components/Sidebar'
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PerfectScrollbar from 'perfect-scrollbar'
// var ps;

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info"
    };
    this.mainPanel = React.createRef();
  }

  // componentDidMount() {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     ps = new PerfectScrollbar(this.mainPanel.current);
  //     document.body.classList.toggle("perfect-scrollbar-on");
  //   }
  // }
  // componentWillUnmount() {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     ps.destroy();
  //     document.body.classList.toggle("perfect-scrollbar-on");
  //   }
  // }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
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
          <div className="content">
            <Switch>
              <React.Fragment>
                {routes.map((prop, key) => {
                  return (
                    <Route
                      path={prop.layout + prop.path}
                      component={prop.component}
                      key={key}
                    />
                  );
                })}
              </React.Fragment>
            </Switch>
          </div>
          <Footer fluid />
        </div>
      </div>
    )
  }
}