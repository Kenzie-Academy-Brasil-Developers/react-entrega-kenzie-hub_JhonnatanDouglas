import React from 'react'
import { StyledContainerLogin } from '../../styles/grid'
import { HeaderLogin } from '../../components/HeaderLogin'
import { StyledLoginForm } from '../../components/FormLogin'

export const LoginPage = () => {
  return (
    <>
      <StyledContainerLogin>
        <HeaderLogin />
        <StyledLoginForm />
      </StyledContainerLogin>
    </>
  )
}
