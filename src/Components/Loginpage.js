import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import "./Loginpage.css";
import { Grid, Paper, TextField } from "@mui/material";
import { useRef } from "react";

const abc = /[a-z]/;

const ABC = /[A-Z]/;

const num = /[0-9]/;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Loginpage() {
  const [open, setOpen] = React.useState(false);
  const [numval, setnumval] = React.useState(false);
  const [uppval, setuppval] = React.useState(false);
  const [lowval, setlowval] = React.useState(false);
  const [lenval, setlenval] = React.useState(false);
  const [sub, setsub] = React.useState(false);

  const refer = useRef();
  const handleClickOpen = () => {
    setOpen(true);
    console.log(refer.current);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(refer.current);
  };

  const passwordValidate = (e) => {
    //console.log(e.target.value.length);
    if (e.target.value.length < 8) {
      setlenval(false);
      console.log(lenval);
    } else {
      setlenval(true);
    }
    if (e.target.value.search(num) === -1) {
      setnumval(false);
      console.log(numval);
    } else {
      setnumval(true);
    }
    if (e.target.value.search(abc) === -1) {
      setlowval(false);
      console.log(lowval);
    } else {
      setlowval(true);
    }
    if (e.target.value.search(ABC) === -1) {
      setuppval(false);
      console.log(uppval);
    } else {
      setuppval(true);
    }
  };

  const handleSubmit = (e) => {
    setsub(true);
    if (
      lowval === true &&
      uppval === true &&
      numval === true &&
      lenval === true
    ) {
      console.log(document.getElementById("email").value);
      console.log(document.getElementById("password").value);
      window.alert("Logged In Successfully");
    } else window.alert("Invalid Password");
    e.preventDefault();
  };
  return (
    <div>
      <Button
        variant="contained"
        id="login"
        ref={refer}
        onClick={handleClickOpen}
      >
        Click here to LogIn
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Log In Page
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Go Back
            </Button>
          </Toolbar>
        </AppBar>
        <Paper id="mypaper">
          <form id="myform" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                    my: 0.5,
                    width: "20vw",
                    height: "20vw",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="large"
                  id="email"
                  label="Email"
                  variant="standard"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="large"
                  id="password"
                  label="Password"
                  variant="standard"
                  type="password"
                  onChange={passwordValidate}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Log In
                </Button>
              </Grid>
              <Grid item xs={12}>
                <div id="valid">
                  <p id={lenval ? "Green" : "Red"}>
                    {sub === true
                      ? lenval === true
                        ? "The Password is 8 digits long"
                        : "The Password is not 8 digits long"
                      : null}
                  </p>
                  <p id={numval ? "Green" : "Red"}>
                    {sub
                      ? numval
                        ? "The Password has a number"
                        : "The Password must have a number"
                      : null}
                  </p>
                  <p id={lowval ? "Green" : "Red"}>
                    {sub
                      ? lowval
                        ? "The Password has a lowercase letter"
                        : "The Password must have a lowercase letter"
                      : null}
                  </p>
                  <p id={uppval ? "Green" : "Red"}>
                    {sub
                      ? uppval
                        ? "The Password has an uppercase letter"
                        : "The Password must have an uppercase letter"
                      : null}
                  </p>
                </div>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Dialog>
    </div>
  );
}
