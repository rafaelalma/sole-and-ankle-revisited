import React from 'react'
import styled from 'styled-components/macro'

import { QUERIES, WEIGHTS } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Hot&nbsp;Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Teenagers</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <MobileButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </MobileButton>
          <MobileButton>
            <Icon id="search" strokeWidth={1} />
          </MobileButton>
          <MobileButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </MobileButton>
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8vw - 3.75rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    gap: 40px;
    margin: 0;
  }
`

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    &:last-of-type {
      display: none;
    }
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`

const MobileButton = styled(UnstyledButton)`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`

export default Header
