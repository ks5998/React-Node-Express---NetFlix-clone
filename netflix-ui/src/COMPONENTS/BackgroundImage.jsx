import React from 'react'
import styled from 'styled-components'
import background from "../ASSETS/login.jpg"

const BackgroundImage = () => {
  return (
    <Container>
        <img src={background} alt="background-image" />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img{
    height: 100vh;
    width: 100vw;
  }
`;

export default BackgroundImage