import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const NotFoundWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.primaryText};
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primaryText};
  margin-top: 10px;
`

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>This page doesn't exist</h1>
      <StyledLink to='/'>Back to home</StyledLink>
    </NotFoundWrapper>
  )
}

export default NotFound
