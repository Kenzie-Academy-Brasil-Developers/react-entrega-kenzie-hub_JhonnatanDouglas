import React, { useState } from 'react'
import { StyledParagraph, StyledTittleH1 } from '../../styles/typography'
import { StyledButton, StyledLink } from '../../styles/buttons'
import { StyledFormLogin } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from './loginSchema'
import { StyledInputLabel } from '../Input'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { StyledPasswordInput } from '../PasswordInput'

export const StyledLoginForm = () => {
  const navigate = useNavigate()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const loginUser = async (formLogin) => {
    try {
      setButtonDisabled(true)
      const body = formLogin
      const { data } = await api.post('/sessions', body)

      const token = data.token
      localStorage.setItem('@TOKEN', token)
      localStorage.setItem('@LOGIN', true)

      toast.success('Login efetuado com sucesso!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })

      setTimeout(() => {
        navigate('/dashboard')
      }, 2500)
    } catch (error) {
      console.error(error)

      toast.error('Ops! Algo deu errado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } finally {
      setButtonDisabled(false)
    }
  }

  const submit = (formLogin) => {
    loginUser(formLogin)
  }

  return (
    <>
      <StyledFormLogin onSubmit={handleSubmit(submit)}>
        <StyledTittleH1>Login</StyledTittleH1>
        <StyledInputLabel
          label='Email'
          type='email'
          placeholder='Digite seu email'
          register={register('email')}
          error={errors.email}
        />

        <StyledPasswordInput
          label='Senha'
          type='password'
          inputStyleType='password'
          placeholder='Digite sua senha'
          register={register('password')}
          error={errors.password}
        />

        <div>
          {buttonDisabled ? (
            <StyledButton
              type='submit'
              buttonstyled='negative'
              buttonsize='max-lg'
              disabled={buttonDisabled}
            >
              Aguarde...
            </StyledButton>
          ) : (
            <StyledButton
              onSubmit={handleSubmit(submit)}
              buttonstyled='primary'
              buttonsize='max-lg'
            >
              Entrar
            </StyledButton>
          )}
          <StyledParagraph emphasis='bold'>
            Ainda não possui uma conta?
          </StyledParagraph>
          <StyledLink
            to='/register'
            buttonstyled='disabled'
            buttonsize='max-lg'
          >
            Cadastre-se
          </StyledLink>
        </div>
      </StyledFormLogin>

      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}
