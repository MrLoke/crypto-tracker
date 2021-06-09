import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
`

export const CoinNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const CoinNavItem = styled.li`
  width: 30%;
  text-align: center;
  display: ${({ mobileHidden }) => (mobileHidden ? 'none' : 'flex')};
  justify-content: center;
  ${({ theme }) => theme.media.md} {
    display: flex;
    width: 20%;
  }
  &:first-child {
    padding-left: 4rem;
  }
`
