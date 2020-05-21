import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'

function Home(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.root}>
        <Typography variant="h2" gutterBottom className={classes.header}>
          You are all done!!
        </Typography>
        <div className={classes.wrapper}>
          <div className={classes.cardBot}>
            <div className={classes.cardTop}>
              <form className={classes.formRoot} noValidate autoComplete="off">
                <div className={classes.btnRow}>
                  <div className={classes.col}>
                    <Button variant="contained" color="primary" onClick={() => {
                        props.history.push('/')
                    }}>
                      All Done!!
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

export default withRouter(Home);