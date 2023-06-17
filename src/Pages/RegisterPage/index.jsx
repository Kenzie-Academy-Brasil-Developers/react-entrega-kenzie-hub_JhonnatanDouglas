import React from 'react'
import { StyledContainerRegister } from '../../styles/grid'
import { HeaderRegister } from '../../components/HeaderRegister'
import { RegisterForm } from '../../components/FormRegister'

export const RegisterPage = () => {
  return (
    <>
      <StyledContainerRegister>
        <HeaderRegister />
        <RegisterForm />
      </StyledContainerRegister>
    </>
  )
}
