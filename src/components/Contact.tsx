import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import "./Contact.css";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0ccda1",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  feild: {
    border: "1px solid #fff",
    color: "#fff",
  },
  label: {
    color: "#fff !important",
    borderColor: "#333",
  },
  root: {
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      // width: '25ch',
      marginTop: "20px",
      marginBottom: "15px",
    },
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <Container>
      <h1>Contact me</h1>
      <ThemeProvider theme={theme}>
        <Contant>
          <Icons>
            <h3>
              <span>Get in touch</span> , for any question you wish to contact
              me please feel the form and i will get back to you as fast as
              possible.
            </h3>
            <div>
              <PersonIcon /> Tal Mamistvalov
            </div>
            <div>
              <MailOutlineIcon /> Tall5225@gmail.com
            </div>
            <div>
              <LocationOnIcon /> Lod/Central
            </div>
            <div>
              <PhoneIcon /> 054-3936061
            </div>
          </Icons>

          <InputFields>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField variant="outlined" id="standard-basic" label="Name" />
              <TextField variant="outlined" id="standard-basic" label="Email" />
              <TextField
                multiline
                maxRows={3}
                variant="outlined"
                id="standard-basic"
                label="Message"
              />
              <Button variant="contained" color="primary">
                send a message
              </Button>
            </form>
          </InputFields>
        </Contant>
      </ThemeProvider>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 100%;
  /* height: 60vh; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: transparent;
  color: #0ccda1;
  padding: 4rem 0;
  /* margin-top: 3rem; */

  h1 {
    margin-top: 30px;
  }

  @media only screen and (max-width: 762px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-top: 1rem; */
  }
`;

const InputFields = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 762px) {
    align-items: center;
    justify-content: center;
    form {
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Contant = styled.div`
  width: 90%;
  /* height: 60%; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 15px;

  @media only screen and (max-width: 762px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;
const Icons = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 1.7;
  span {
    color: #fff;
  }
  div {
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    float: left;
  }
  h3 {
    width: 100%;
  }
`;
