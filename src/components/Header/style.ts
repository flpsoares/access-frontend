import styled from 'styled-components'

export const Container = styled.div`
  background: #373a40;
  
  width: 100%;
  height: 60px;
  
  display: flex;
  align-items:center;
`

export const Button = styled.button`
  color: white;
  font-size: 20px;

  margin-left:35px;
  font-weight:500;

  transition: color 0.3s ease;

  &:hover{
    color: var(--primary);
  }
  
`