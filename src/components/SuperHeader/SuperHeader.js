import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, QUERIES } from '../../constants'

import SearchInput from '../SearchInput'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'

const SuperHeader = () => {
  return (
    <>
      <Wrapper>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </Wrapper>
      <DecorativeLine />
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`

const MarketingMessage = styled.span`
  color: var(--color-white);
  margin-right: auto;
`

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`

const DecorativeLine = styled.div`
  display: none;
  height: 4px;
  background-color: ${COLORS.gray[900]};

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`

export default SuperHeader
