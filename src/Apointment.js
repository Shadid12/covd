import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import Typography from '@material-ui/core/Typography';
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'
import { ThemeContextConsumer } from "./theme";

import { appointments } from './demo-data/appointments';


const styles = {
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#B8F2E6',
    },
    header: {
        textAlign: 'center'
    },
    col: {
        display: 'flex',
        marginTop: '25px',
        marginBottom: '10px',
        justifyContent: 'center'
    }
};

class Appointment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      currentDate: new Date(),

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointmentId: undefined,
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointmentId = this.changeEditingAppointmentId.bind(this);
  }

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointmentId(editingAppointmentId) {
    this.setState({ editingAppointmentId });
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const {
      currentDate, data, addedAppointment, appointmentChanges, editingAppointmentId,
    } = this.state;
    const { classes } = this.props;

    return (
      <ThemeContextConsumer>
      {context => (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" className={classes.root}>
            <Typography variant="h2" gutterBottom className={classes.header}>
                Select Availability
            </Typography>
            <Paper >
                <Scheduler
                    data={data}
                    height={660}
                >
                <ViewState
                    currentDate={currentDate}
                />
                <EditingState
                    onCommitChanges={this.commitChanges}

                    addedAppointment={addedAppointment}
                    onAddedAppointmentChange={this.changeAddedAppointment}

                    appointmentChanges={appointmentChanges}
                    onAppointmentChangesChange={this.changeAppointmentChanges}

                    editingAppointmentId={editingAppointmentId}
                    onEditingAppointmentIdChange={this.changeEditingAppointmentId}
                />
                <WeekView
                    startDayHour={9}
                    endDayHour={17}
                />
                <AllDayPanel />
                <EditRecurrenceMenu />
                <ConfirmationDialog />
                <Appointments />
                <AppointmentForm />
                </Scheduler>
            </Paper>
            <div className={classes.col}>
                    <Button variant="contained" color="primary" onClick={() => {
                        this.props.history.push('/done')
                    }}>
                        Finish
                    </Button>
                </div>
            </Container>
        </React.Fragment>
      )}
      </ThemeContextConsumer>
    );
  }
}

export default withStyles(styles)( withRouter(Appointment));
