import React from 'react'
import routes from "../routes.js"
import {
  Button,
  Card,
  CardBody
} from 'reactstrap'
import Footer from '../components/Footer'
import PerfectScrollbar from 'perfect-scrollbar'
import MenuButton from '../components/MenuButton.js'
var ps

export default class Admin extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         backgroundColor: "black",
  //         activeColor: "info"
  //     };
  //     this.mainPanel = React.createRef();
  // }

  // componentDidMount() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps = new PerfectScrollbar(this.mainPanel.current);
  //       document.body.classList.toggle("perfect-scrollbar-on");
  //     }
  //   }
  //   componentWillUnmount() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //       document.body.classList.toggle("perfect-scrollbar-on");
  //     }
  //   }
  //   componentDidUpdate(e) {
  //     if (e.history.action === "PUSH") {
  //       this.mainPanel.current.scrollTop = 0;
  //       document.scrollingElement.scrollTop = 0;
  //     }
  //   }
  //   handleActiveClick = color => {
  //     this.setState({ activeColor: color });
  //   };
  //   handleBgClick = color => {
  //     this.setState({ backgroundColor: color });
  //   };
  render() {
    return (
      <div className="container">
        <Card className="d-flex align-items-center">

          <CardBody>
            <MenuButton iclass="nc-icon nc-bullet-list-67" value="Dashboard"/>
          </CardBody>
          <Footer fluid />
        </Card>
      </div>
    )
  }
}