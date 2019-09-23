import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default class Authentication extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    render() {
        const [screen, setScreen] = useState('auth')
        const [username, setUsername] = useState()
        const [password, setPassword] = useState()
        const auth = async () => {
            try {
                const res = await axios.get('/authenticate', { auth: { username, password } });

                if (res.data.screen !== undefined) {
                    setScreen(res.data.screen);
                }
            } catch (e) {
                console.log(e);
            }
        }
        return (
            <div>
                <label>Username: </label>
                <br />
                <input type="text" onChange={e => setUsername(e.target.value)} />
                <br />
                <label>Password: </label>
                <br />
                <input type="password" onChange={e => setPassword(e.target.value)} />
                <br />
                <button onClick={auth}>Login</button>
            </div>
        )
    }
}