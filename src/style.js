import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  wrapper: {
      padding: '5px 60px'
  },
  header: {
      textAlign: 'center'
  },
  cardBot: {
      height: '77vh',
      backgroundColor: '#5E6472'

  },
  cardTop: {
      height: '75vh',
      backgroundColor: '#B8F2E6',
      transform: 'translate(30px, -20px)'
  },
  formRoot: {
      padding: '50px'
  },
  row: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0px 60px',
      marginTop: '10px'
  },
  col: {

  },
  btnRow: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center'
  }
}));