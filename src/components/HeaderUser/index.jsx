import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { StyledUserContainer } from './styles'
import { StyledParagraph, StyledTittleH1 } from "../../styles/typography"

export const StyledUserHeader = () => {
  const isLogged = JSON.parse(localStorage.getItem('@LOGIN'))
  const token = localStorage.getItem('@TOKEN')
  const navigate = useNavigate()
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setUserData(data)
      } catch (error) {
        console.error(error)
      }
    }

    const forceLoggout = () => {
      localStorage.clear()
      navigate('/')
    }

    isLogged ? loadUser() : forceLoggout()
  }, [])

  return (
    <StyledUserContainer>
      <StyledTittleH1>
        <strong>{userData.name}</strong>
      </StyledTittleH1>
      <StyledParagraph>{userData.course_module}</StyledParagraph>
    </StyledUserContainer>
  )
}
