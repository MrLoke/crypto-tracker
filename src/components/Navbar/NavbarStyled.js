import styled from 'styled-components/macro'

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: sticky;
  top: 0;
  left: 0;
  color: inherit;
  ${({ theme }) => theme.media.md} {
    justify-content: space-around;
  }
`

export const AppHeader = styled.h1`
  text-decoration: line-through;
  margin-left: 3rem;
  font-size: ${({ theme }) => theme.size.s};
  a {
    text-decoration: none;
    color: #eee;
  }
  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.size.m};
  }
`

export const Menu = styled.div`
  display: none;
  ${({ theme }) => theme.media.md} {
    display: flex;
  }
`

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`

export const ListItem = styled.li`
  padding: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    transition: all 0.2s linear;
    color: ${({ theme }) => theme.colors.brand};
    text-decoration: none;
    background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 3px
      no-repeat;
    transition: 0.3s;
    padding-bottom: 0.5rem;
  }
  &:hover {
    a {
      color: ${({ theme }) => theme.colors.accent};
      --d: 100%;
    }
  }
`