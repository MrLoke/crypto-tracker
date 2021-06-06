import MobileMenu from 'components/MobileMenu/MobileMenu'
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher'
import { useAppContext } from 'context/AppContext'
import { Link } from 'react-router-dom'
import { Nav, AppHeader, Menu, MenuList, ListItem } from './NavbarStyled'

const Navbar = () => {
  const { currency, toggleCurrency } = useAppContext()

  return (
    <Nav>
      <MobileMenu />
      <AppHeader>
        <Link to='/'>CryptoCoins</Link>
      </AppHeader>
      <Menu>
        <MenuList>
          <ListItem>
            <Link to='/#'>Cryptocurrencies</Link>
          </ListItem>
          <ListItem>
            <Link to='/#'>Exchanges</Link>
          </ListItem>
          <ListItem>
            <Link to='/#'>NFT</Link>
          </ListItem>
          <ListItem>
            <Link to='/watchlist'>Watchlist</Link>
          </ListItem>
        </MenuList>
      </Menu>
      <div>
        <span>{currency.toUpperCase()}</span>
        <button onClick={() => toggleCurrency('usd')}>usd</button>
        <button onClick={() => toggleCurrency('eur')}>eur</button>
        <button onClick={() => toggleCurrency('pln')}>pln</button>
      </div>
      <ThemeSwitcher />
    </Nav>
  )
}

export default Navbar
