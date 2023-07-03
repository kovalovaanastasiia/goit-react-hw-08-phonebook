import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import {loginThunk} from "../../redux/auth/thunks";
import {selectIsAuth} from "../../redux/selectors";

import {Box, Button, Container, CssBaseline, Grid, TextField} from "@mui/material";

const LoginPage = () => {

  const isAuth = useSelector(selectIsAuth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = event => {
    const {value, name} = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };


  useEffect(() => {
    isAuth && navigate("/contacts");
  }, [isAuth, navigate]);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    dispatch(loginThunk({email, password}))
      .unwrap()
      .then(() => {
        navigate("/contacts");
      });
    setEmail("");
    setPassword("");
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
      <Box component="form" autoComplete="off" noValidate onSubmit={handleSubmitForm} sx={{mt: 20}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="Enter your login"
              name="email"
              required
              fullWidth
              id="email"
              label="Email"
              onChange={changeHandler}
              autoFocus
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
              autoComplete="Enter password"
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
          LogIn
        </Button>
      </Box>
    </Container>
  );
}
export default LoginPage;
