import React from 'react'
import logo from '../../../src/assets/Main/Logo-KenzieHub-Login_Register.svg'
import { StyledHeaderDefault } from './styles'
import { StyledButton } from '../../styles/buttons'
import { useNavigate } from 'react-router-dom'

export const HeaderDefault = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <StyledHeaderDefault>
      <figure>
        <img src={logo} alt='Logotipo do site Kenzie Hub' />
      </figure>
      <StyledButton onClick={logout} buttonstyled='default' buttonsize='min-sm'>
        Sair
      </StyledButton>
    </StyledHeaderDefault>
  )
}
