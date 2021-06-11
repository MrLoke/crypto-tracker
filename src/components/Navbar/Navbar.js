import MobileMenu from 'components/MobileMenu/MobileMenu'
import SearchCoin from 'components/SearchCoin/SearchCoin'
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher'
import { Link } from 'react-router-dom'
import { Nav, AppHeader, Menu, MenuList, ListItem } from './NavbarStyled'

const Navbar = () => {
  return (
    <Nav>
      <MobileMenu />
      <AppHeader>
        <Link to='/'>Crypto</Link>
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
            <Link to='/watchlist'>Watchlist</Link>
          </ListItem>
        </MenuList>
      </Menu>
      <SearchCoin />
      <ThemeSwitcher />
    </Nav>
  )
}

export default Navbar
