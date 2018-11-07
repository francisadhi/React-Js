import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

class Film extends React.Component {
    render(){
      const { films } = this.props
        return(
            <React.Fragment>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      film.
                    </Typography>
                    <Typography>
                      test
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="grey">
                      View
                    </Button>
                    <Button color="grey">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
            </React.Fragment>
        )
    }
}

export default Film