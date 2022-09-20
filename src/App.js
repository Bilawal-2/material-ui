import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import "fontsource-roboto";

import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Paper, Grid, AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg,#FE6888,#FF8E53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Button Styled</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <CheckBox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing CheckBox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome To MUI
            </Typography>
            <Typography variant="subtitle1">
              Learm How to use Material UI
            </Typography>
            <ButtonStyled />
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>
            <CheckBoxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<DeleteIcon />}>Discard</Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
