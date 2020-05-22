import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'
import { ThemeContextConsumer } from "./theme";

function Home(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: '',
    email: '',
    hc: '',
    age: '',
    address: ''
  })
  
  const handleInputChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  return (
    <ThemeContextConsumer>
    {context => (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.root}>
        <Typography variant="h2" gutterBottom className={classes.header}>
          Please fill out your information
        </Typography>
        <div className={classes.wrapper}>
          <div className={classes.cardBot}>
          <div className={classes.cardTop}>
          <form className={classes.formRoot} noValidate autoComplete="off">
          <div className={classes.row}>
            <div className={classes.col}>
              <TextField 
                id="name" 
                label="Name" 
                variant="filled"
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.col}>
              <TextField 
                id="email" 
                label="Email" 
                variant="filled" 
                type="text" 
                name="email"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <TextField 
                id="address" 
                label="Address" 
                variant="filled"
                name="address"
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.col}>
              <TextField 
                id="age" 
                label="Age" 
                variant="filled" 
                type="number"
                name="age"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <TextField 
                id="travel" 
                label="Travel History" 
                variant="filled" multiline 
                rows={4}
                name="travel"
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.col}>
              <TextField 
                id="HealthCard" 
                label="Health Card #" 
                variant="filled"
                name="hc"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={classes.btnRow}>
            <div className={classes.col}>
              <Button variant="contained" color="primary" onClick={() => {
                  context.updateState(state)
                  props.history.push('/apt')
              }}>
                Submit {context.name}
              </Button>
            </div>
          </div>
        </form>
          </div>
          </div>
        </div>
      </Container>
      </React.Fragment>
    )}
    </ThemeContextConsumer>
  );
}

export default withRouter(Home);