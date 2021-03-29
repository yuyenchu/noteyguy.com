import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Collapse from '@material-ui/core/Collapse';
import CssBaseline from '@material-ui/core/CssBaseline';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '0px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    fontFamily: 'HanziPen SC',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 1,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

  menu: {
    width:"1325px",
    height:"500px",
    // backgroundColor:"#001a4d",
    background: 'linear-gradient(to top, #313e5a 30%, #001a4d 90%)',
    marginTop:'0px',
    marginBottom:'0px',
    color:'white', 
    float:'right',
  },

  Math: {
    position: 'absolute',
    top: '100px',
    left: '200px',
  },

  CS: {
    position: 'absolute',
    top: '100px',
    left: '400px',
  },

  Quantum: {
    position: 'absolute',
    top: '100px',
    left: '550px',
  },

  Researches: {
    position: 'absolute',
    top: '100px',
    left: '860px',
  },

  Languages: {
    position: 'absolute',
    top: '100px',
    left: '1160px',
  }

}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <React.Fragment>
      <CssBaseline />
        <AppBar position="static" style={{ background: '#2E3B55' }}> 
          <Toolbar>
            <a href="/">
              <img id="icon" src="TheNoteyGuyIcon.png"/>
            </a>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleChange}
              getContentAnchorEl={null}
            >
              <MenuIcon/>
            </IconButton>

            <Typography className={classes.title} variant="h3" noWrap>
              The Notey Guy
            </Typography>

            <div>
              <a href='https://www.google.com/search?q=login&rlz=1C5CHFA_enTW946TW946&oq=login&aqs=chrome..69i57j0l4j69i60l3.1120j0j4&sourceid=chrome&ie=UTF-8'><u>Login </u></a>
              /
              <a href='https://www.google.com/search?q=register&rlz=1C5CHFA_enTW946TW946&oq=register&aqs=chrome..69i57j35i39j0i433j0l3j0i10j0.1662j0j4&sourceid=chrome&ie=UTF-8'><u> Register</u>     </a>
            </div>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
        </React.Fragment> 

      <div className={classes.container}>
            <Collapse in={checked}>
              <p className={classes.menu}>
                <a href='https://www.google.com/search?q=math&rlz=1C5CHFA_enTW946TW946&oq=math&aqs=chrome..69i57j0i131i433l2j0j69i60j69i65l2j69i60.5011j0j4&sourceid=chrome&ie=UTF-8'><h1 className={classes.Math}><u>Math</u></h1></a>
                <a href='https://www.google.com/search?q=computer+science&rlz=1C5CHFA_enTW946TW946&oq=computer+science&aqs=chrome..69i57j0l9.3997j0j7&sourceid=chrome&ie=UTF-8'><h1 className={classes.CS}><u>CS</u></h1></a>
                <a href='https://www.google.com/search?q=quantum&rlz=1C5CHFA_enTW946TW946&oq=quantum&aqs=chrome..69i57j35i39l2j0i433j0i131i433l2j0l4.3991j0j7&sourceid=chrome&ie=UTF-8'><h1 className={classes.Quantum}><u>Social Studies</u></h1></a>
                <a href='https://www.google.com/search?q=researches&rlz=1C5CHFA_enTW946TW946&oq=researches&aqs=chrome..69i57j0i10l2j0j0i10l5j0.3801j0j9&sourceid=chrome&ie=UTF-8'><h1 className={classes.Researches}><u>Researches</u></h1></a>
                <a href='https://www.google.com/search?q=Languages&rlz=1C5CHFA_enTW946TW946&oq=Languages&aqs=chrome..69i57j0l9.1808j0j9&sourceid=chrome&ie=UTF-8'><h1 className={classes.Languages}><u>Languages</u></h1></a>

              </p>
            </Collapse>
      </div>
    </div>
  );
}




{/* <React.Fragment>
<CssBaseline />
<ElevationScroll {...props}>
  <AppBar>
    <Toolbar>
      <Typography variant="h6">Scroll to Elevate App Bar</Typography>
    </Toolbar>
  </AppBar>
</ElevationScroll>
<Toolbar />
<Container>
  <Box my={2}>
    {[...new Array(12)]
      .map(
        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
      )
      .join('\n')}
  </Box>
</Container>
</React.Fragment> */}
