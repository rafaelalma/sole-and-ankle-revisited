/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'
import { COLORS, WEIGHTS } from '../../constants'

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="mobile menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" size={24} strokeWidth={1.5} />
        </CloseButton>
        <Nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsla(var(--color-gray-hue) 5% 40% / 0.8);
`

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 33%;
  background: var(--color-white);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Link = styled.a`
  text-decoration: none;

  ${Nav} & {
    text-transform: uppercase;
    font-size: ${18 / 16}rem;
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.gray[900]};
    line-height: ${21 / 16}rem;

    &:first-of-type {
      color: var(--color-secondary);
    }
  }

  ${Footer} & {
    font-size: ${14 / 16}rem;
    font-weight: ${WEIGHTS.normal};
    color: ${COLORS.gray[700]};
    line-height: 1rem;
  }
`

export default MobileMenu
