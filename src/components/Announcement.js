import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 35px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <div>
        <Container>
            Super Deal! Free shipping on orders over $50
        </Container>
      
    </div>
  )
}

export default Announcement
