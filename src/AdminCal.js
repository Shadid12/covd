import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import Typography from '@material-ui/core/Typography';
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
  Resources
} from '@devexpress/dx-react-scheduler-material-ui';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'

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

class AdminCal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      currentDate: new Date(),

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointmentId: undefined,
      resources: [
        {
          fieldName: 'status',
          title: 'Status',
          instances: [
            { id: 'pending', text: 'pending', color: 'purple' },
            { id: 'scheduled', text: 'scheduled', color: 'green' }
          ],
        }
      ],
      mainResourceName: 'status',
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
      resources, mainResourceName
    } = this.state;
    const { classes } = this.props;

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" className={classes.root}>
            <Typography variant="h2" gutterBottom className={classes.header}>
                Confirm Testing Schedule
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
                <Resources
                    data={resources}
                    mainResourceName={mainResourceName}
                />
                </Scheduler>
            </Paper>
            <div className={classes.col}>
                <Button variant="contained" color="primary" >
                    Finish
                </Button>
            </div>
            </Container>
        </React.Fragment>
    );
  }
}

export default withStyles(styles)( withRouter(AdminCal));
