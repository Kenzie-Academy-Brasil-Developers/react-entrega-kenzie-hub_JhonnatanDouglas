import React from 'react'
import { StyledContainerLogin } from '../../styles/grid'
import { HeaderLogin } from '../../Components/Headers/HeaderLogin'
import { StyledLoginForm } from '../../Components/FormLogin'

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
