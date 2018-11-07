import React from 'react'
import Card from '../../Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '../../Atom/Button/index';
import { changePageTitle } from '../../../actions/app';
import connect from 'react-redux/lib/connect/connect';

const styles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 600,
      padding: theme.spacing.unit * 2,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  });

//   const ComplexGrid = (props) => {
class ComplexGrid extends React.Component {    
    render(){
        const { classes } = this.props;
        return (
        <Card>
         <Grid container spacing={16}>
            <Grid item>
            <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://hacktiv8.com/img/logo-hacktiv8_bordered--md5--f7ee5fc69819b5ef3849344c119f5e18.png" />
            </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    Standard license
                </Typography>
                <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                <Typography color="textSecondary">ID: 1030114</Typography>
                </Grid>
                <Grid item>
                <Button style="20" variant="outlined" myClick={() => this.props.magicButton('Qtemua yuk')} color="grey">Join</Button>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
            </Grid>
        </Grid>
        </Card>
      )
    }
}

ComplexGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const mapDispatchToProps = (dispatch) => {
      return {
          magicButton: (judulBaru) => dispatch(changePageTitle(judulBaru))
      }
  }

ComplexGrid = connect(null, mapDispatchToProps)(ComplexGrid)

export default withStyles(styles)(ComplexGrid);