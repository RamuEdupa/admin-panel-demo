import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components';

const MainWrapper = styled.div`
    /* width: 75vw; */
`

const Main = () => {
  return (
    <MainWrapper>
      <Header/>
    </MainWrapper>
  )
}

export default Main;
