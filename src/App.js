import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  const classes = useStyles();
  return (
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
                    <TextField id="name" label="Name" variant="filled" />
                  </div>
                  <div className={classes.col}>
                    <TextField id="age" label="Age" variant="filled" type="number"/>
                  </div>
                </div>
                <div className={classes.row}>
                  <div className={classes.col}>
                    <TextField id="address" label="Address" variant="filled" />
                  </div>
                  <div className={classes.col}>
                    <TextField id="HealthCard" label="Health Card #" variant="filled" />
                  </div>
                </div>
                <div className={classes.row}>
                  <div className={classes.col}>
                    <TextField 
                      id="travel" 
                      label="Travel History" 
                      variant="filled" multiline 
                      rows={4}
                    />
                  </div>
                </div>
                <div className={classes.btnRow}>
                  <div className={classes.col}>
                    <Button variant="contained" color="primary">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
