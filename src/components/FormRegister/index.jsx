import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from './registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { StyledFormRegister } from './styles'
import { StyledParagraph, StyledTittleH1 } from '../../styles/typography'
import { StyledInputLabel } from '../Input'
import { StyledButton } from '../../styles/buttons'
import { StyledInputTextArea } from '../TextArea'
import { StyledInputSelect } from '../Select'
import { api } from '../../services/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { StyledPasswordInput } from '../PasswordInput'

export const RegisterForm = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const userRegister = async (formData) => {
    try {
      setButtonDisabled(true)
      const body = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module,
      }
      const { data } = await api.post('/users', body)

      toast.success('Conta criada com sucesso!', {
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
        navigate('/')
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

  const submit = (formData) => {
    userRegister(formData)
  }

  return (
    <>
      <StyledFormRegister onSubmit={handleSubmit(submit)}>
        <StyledTittleH1>Crie sua conta</StyledTittleH1>
        <StyledParagraph emphasis='bold'>
          Rapido e grátis, vamos nessa
        </StyledParagraph>
        <StyledInputLabel
          label='Nome'
          type='text'
          register={register('name')}
          placeholder='Digite seu nome'
          error={errors.name}
        />

        <StyledInputLabel
          label='E-mail'
          type='email'
          register={register('email')}
          placeholder='Digite seu email'
          autoComplete='off'
          error={errors.email}
        />

        <StyledPasswordInput
          label='Senha'
          type='password'
          register={register('password')}
          placeholder='Digite aqui sua senha'
          autoComplete='off'
          error={errors.password}
        />

        <StyledPasswordInput
          label='Confirmar Senha'
          type='password'
          register={register('confirm')}
          placeholder='Digite novamente sua senha'
          error={errors.confirm}
        />

        <StyledInputTextArea
          id='bio'
          cols='1'
          rows='1'
          label='Bio'
          register={register('bio')}
          placeholder='Fale sobre você'
          error={errors.bio}
        />

        <StyledInputLabel
          label='Contato'
          type='text'
          register={register('contact')}
          placeholder='Opção de contato'
          error={errors.contact}
        />

        <StyledInputSelect
          label='Selecionar Módulo'
          register={register('course_module')}
          error={errors.course_module}
        />

        {buttonDisabled ? (
          <StyledButton
            type='submit'
            buttonstyled='negative'
            buttonsize='max-lg'
            disabled={buttonDisabled}
          >
            Carregando...
          </StyledButton>
        ) : (
          <StyledButton
            type='submit'
            buttonstyled='primary'
            buttonsize='max-lg'
          >
            Cadastrar
          </StyledButton>
        )}
      </StyledFormRegister>

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
