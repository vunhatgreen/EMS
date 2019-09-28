import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import {
  Col,
  Button,
  Input,
  Card,
  CardBody
} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.css"
import "./assets/scss/paper-dashboard.scss?v=1.1.0"
import "perfect-scrollbar/css/perfect-scrollbar.css"

import AdminLayout from "./layouts/Admin"
import axios from 'axios'
import UserLayout from './layouts/User';

const hist = createBrowserHistory()


function View(props) {
  const { screen, setScreen } = props
  const [data, setData] = useState()
  // const deleteCookie = async () => {
  //   try {
  //     await axios.get('/clear-cookie')
  //     setScreen('auth')
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };
  // const getData = async () => {
  //   try {
  //     const res = await axios.get('/get-data')
  //     console.log(res.data)
  //     setData(res.data)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  return (
    <>
      {/* <p>{screen}</p>
      <p>{data}</p>
      <button onClick={getData}>Get Data</button>
      <button onClick={deleteCookie}>Logout</button> */}
      <Router history={hist}>
        <Switch>
          {
            screen === 'user' ?
              <>
                <Route path="/user" render={props => <UserLayout {...props} />} />
                <Redirect to="/user/" />
              </>
              :
              <>
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                <Redirect to="/admin/dashboard" />
              </>
          }

        </Switch>
      </Router>

    </>
  );
}

export default function App() {
  const [screen, setScreen] = useState('auth')
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const auth = async () => {
    try {
      const res = await axios.get('/authenticate', { auth: { username, password } })

      if (res.data.screen !== undefined) {
        setScreen(res.data.screen)
      }
    } catch (e) {
      console.log(e)
    }
  }
  const readCookie = async () => {
    try {
      const res = await axios.get('/read-cookie')

      if (res.data.screen !== undefined) {
        setScreen(res.data.screen)
      }
    } catch (e) {
      setScreen('auth');
      console.log(e)
    }
  }
  useEffect(() => {
    readCookie()
  }, [])

  return (
    <div className="App">
      {screen === 'auth'
        ?
        <Col className="ml-auto mr-auto" style={{ paddingTop: "100px", width: "350px" }}>
          <Card>
            admin - admin or user - 123
              <CardBody>
              <label>Tên tài khoản: </label>
              <br />
              <Input type="text" onChange={e => setUsername(e.target.value)} />
              <br />
              <label>Mật khẩu: </label>
              <br />
              <Input type="password" onChange={e => setPassword(e.target.value)} />
              <br />
              <Button onClick={auth}>Đăng nhập</Button>
            </CardBody>
          </Card>
        </Col>
        : <View screen={screen} setScreen={setScreen} />
      }
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
