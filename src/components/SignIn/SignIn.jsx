import React from 'react'
import { Container, Form, FormButton, FormWrap, Icon, FormContent, FormH1, FormLabel, FormInput, FormText } from './SignInElements'

const SignIn = () => {
  return (
    <>
      <Container id="signin">
        <FormWrap>
          <Icon to="/">REACT</Icon>
          <FormContent>
            <Form action="#">
              <FormH1> Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required/>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required/>
              <FormButton type='submit'>Continue</FormButton>
              <FormText>Forgot password</FormText>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn