import React from 'react'
import './menubar.css'
import Button from '@material-ui/core/Button'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

let Menubar = (props) => (

            <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" color="inherit">{props.app.pageTitle}</Typography>
                <Link to="/">
                    <Button color="inherit">Homee</Button>
                </Link>
                <Link to="/about">
                    <Button color="inherit">Abot</Button>
                </Link>
                <Link to="/film">
                    <Button color="inherit">Film</Button>
                </Link>
            </Toolbar>
            </AppBar>
)

const mapStateToProps = (state) => {
    return {
        app:state.app, 
    }
}

export default connect(mapStateToProps)(Menubar);