import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {signUpThunk} from "../../redux/auth/thunks";
import {selectIsAuth} from "../../redux/selectors";

import {Box, Button, Container, CssBaseline, Grid, TextField} from "@mui/material";


const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = event => {
    const {value, name} = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  useEffect(() => {
    isAuth && navigate("/contacts");
  }, [isAuth, navigate]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      signUpThunk({
        name,
        email,
        password,
      })
    ).unwrap().then(() => {
      navigate("/contacts");
    });
  };

  return (
    <Container
      component='main'
      maxWidth="sm"
      sx={{
        marginTop: 1.5,
        marginBottom: 1.5,
        minHeight: '65vh',
      }}
    >
      <CssBaseline/>
      <Box component="form" autoComplete="off" noValidate onSubmit={submitHandler} sx={{mt: 20}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              onChange={changeHandler}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={changeHandler}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{mt: 3, mb: 2}}
          disabled={!email || !password}
        >
          Registration
        </Button>
      </Box>
    </Container>
  );
}
export default RegistrationPage;
