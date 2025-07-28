import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    width: 25rem;
    margin: auto;
    box-shadow: .3125rem .125rem .3125rem .125rem rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 200,
    display: 'flex',
    margin: 'auto',
    padding: '3.125rem 0 0'
});

const Wrapper = styled(Box)`
    padding: 1.5625rem 2.1875rem;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 1.25rem;
    }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #305cde;
  color: #fff;
  height: 3rem;
  border-radius: 0.125rem;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 3rem;
    border-radius: .125rem;
    box-shadow: 0 .125rem .25rem 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: .75rem;
`;

const Error = styled(Typography)`
    font-size: .625rem;
    color: #ff6161;
    line-height: 0;
    margin-top: .625rem;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '' 
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = "https://i.ibb.co/Rk8zGPm0/cropped-image.png";

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
          console.log("Login object:", login);
        let response = await API.userLogin(login);
          console.log("Response:", response);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
      <Component>
        <Box>
          <Image src={imageURL} alt="blog" />
          {account === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                value={login.username}
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                value={login.password}
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />

              {error && <Error>{error}</Error>}

              <LoginButton variant="contained" onClick={() => loginUser()}>
                Login
              </LoginButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <SignupButton
                onClick={() => toggleSignup()}
                style={{ marginBottom: 50 }}
              >
                Create an account
              </SignupButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="name"
                label="Enter Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              {error && <Error>{error}</Error>}
              <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <LoginButton variant="contained" onClick={() => toggleSignup()}>
                Already have an account
              </LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    );
}

export default Login; 