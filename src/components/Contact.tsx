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
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';

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
}));

const StyledButton = withStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: "#fff",
    height: 48,
    padding: "0 30px",
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: "capitalize",
    color: "#fff",
  },
})(TextField);

function Contact() {
  const classes = useStyles();
  return (
    <Container>
      <h1>Contact me</h1>
      <ThemeProvider theme={theme}>
        <Contant>
          <Icons>
            <h3><span>Get in touch</span> , for any question you wish to contact me please feel the form and i will 
              get back to you as fast as possible.

            </h3>
            <div><PersonIcon/>  Tal Mamistvalov </div>
            <div><MailOutlineIcon/>  Tall5225@gmail.com</div>
            <div><LocationOnIcon/>  Lod/Central</div>
            <Button variant="contained" color="primary">send message</Button>
            

          </Icons>
          <InputFields>
            <TextField id="standard-basic" label="First Name" />
            <TextField id="standard-basic" label="Last Name" />
            <TextField id="standard-basic" label="Email" />
            <TextField id="standard-basic" label="Message" />
          </InputFields>
        </Contant>
      </ThemeProvider>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: transparent;
  color: #0ccda1;
  margin-top: 3rem;
`;

const InputFields = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  div{
    width: 60%;
    justify-content: center;
    align-items: center;
  }
`;

const Contant = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Icons = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 1.9;
  span{
    color: #fff;
  }
  div{
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    float: left;
    
  }
`;
