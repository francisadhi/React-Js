import React from 'react'
import Section from '../component/Section'
// import { ListItem, Avatar, ListItemText, CircularProgress, List } from '@material-ui/core';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';

class Member extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
            userData : null,
        }
      }

    fecthAsync = async() => {
        await Axios.get(`https://swapi.co/api/people/1/`)
        .then(function (response)
        {
            console.log(response.status);
        })
    }

    componentDidMount(){
        const { match } = this.props
        Axios.get(`https://swapi.co/api/people/${match.params.id}/`)
        // .then(response => response.data.results)
        .then((userData) => {
            this.setState(() => ({ userData }))
        })

        // const { id } = this.props.match.params

        // Axios.get(`https://swapi.co/api/people/${id}/`)
        // .then(response => response.data.results)
        // .then((member) => {
        //     this.setState(() => ({ member }))
        // })
    }

    render(){
    const { userData } = this.state
    return userData ? (
        <Grid container>
            <Avatar
                style={{
                    width: 200,
                    height: 200,
                    fontSize: 80
                }}
                >
                {userData.name}
                </Avatar>
        </Grid>
        ) : <CircularProgress />
    }
}

export default Member