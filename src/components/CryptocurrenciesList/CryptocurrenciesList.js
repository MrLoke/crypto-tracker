import { Container, CoinNav, CoinNavItem } from './CryptocurrenciesListStyled'

const CryptocurrenciesList = () => {
  return (
    <Container>
      <div style={{ width: '100%' }}>
        <CoinNav>
          <CoinNavItem>Name</CoinNavItem>
          <CoinNavItem>Price</CoinNavItem>
          <CoinNavItem mobileHidden>24H Change</CoinNavItem>
          <CoinNavItem mobileHidden>24H Volume</CoinNavItem>
          <CoinNavItem mobileHidden>Market Cup</CoinNavItem>
        </CoinNav>
      </div>
    </Container>
  )
}

export default CryptocurrenciesList
