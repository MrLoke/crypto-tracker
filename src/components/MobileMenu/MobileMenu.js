import { useRef, useState } from 'react'
import useDetectedOutsideClick from 'hooks/useDetectedOutsideClick'
import { Link } from 'react-router-dom'
import {
  MenuWrapper,
  MenuContainer,
  MenuList,
  ListItem,
  Hamburger,
} from './MobileMenuStyled'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef()
  useDetectedOutsideClick(menuRef, setIsOpen)

  return (
    <MenuWrapper ref={menuRef}>
      <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <MenuContainer isOpen={isOpen}>
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
            <Link to='/#'>Watchlist</Link>
          </ListItem>
          <ListItem>
            <Link to='/#'>Products</Link>
          </ListItem>
        </MenuList>
      </MenuContainer>
    </MenuWrapper>
  )
}

export default MobileMenu
