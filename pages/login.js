import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Divider } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { Checkbox } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'


function login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function changeUsername(event) {
        setUsername(event.target.value)
    }

    function changePassword(event) {
        setPassword(event.target.value)
    }

    const credentials = async () => {
        
        try {
            const { data } = await axios.post('http://localhost:1337/api/auth/local', {
                identifier: username,
                password: password,
            });

            localStorage.setItem('token',data.jwt) //Provisional, esto no se debe hacer
        } catch (error) {
        }
    }


    const paperStyle = { padding: 20, height: '400px', width: 380, margin: "150px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '16px 0 0 0', height: '50px' }
    const txtStyle = { margin: '10px 0' }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} square={true}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>MYFRUVER</Avatar>
                    <h2>My Fruver</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' style={txtStyle} onChange={changeUsername} fullWidth required />
                <TextField label='Password' placeholder='Enter password' style={txtStyle} onChange={changePassword} type='password' fullWidth required />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={credentials} fullWidth>Ingresar</Button>
            </Paper>
        </Grid>
    )
}

export default login;