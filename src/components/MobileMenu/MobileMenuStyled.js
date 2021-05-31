import styled, { css } from 'styled-components/macro'

export const MenuWrapper = styled.div`
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`

export const MenuContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondaryCardBg};
  width: 300px;
  height: calc(100vh - 60px);
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-300px)'};
  transition: all 0.2s ease-in-out;
  z-index: 2;
`

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ListItem = styled.li`
  padding: 2rem 0 2rem 4rem;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiaryText};
  &:first-child {
    margin-top: 5rem;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryText};
  }
`

export const Hamburger = styled.div`
  width: 60px;
  height: 25px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 60%;
    background: ${({ theme }) => theme.colors.primaryText};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 12px;
    }
    &:nth-child(3) {
      top: 12px;
    }
    &:nth-child(4) {
      top: 24px;
    }
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      span {
        &:nth-child(1) {
          top: 18px;
          width: 0%;
          left: 50%;
        }
        &:nth-child(2) {
          transform: rotate(45deg);
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
        }
        &:nth-child(4) {
          top: 18px;
          width: 0%;
          left: 50%;
        }
      }
    `}
`
