import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  background: #ecf1f8;

  display: flex;

`

export const Content = styled.div`
  width: 70%;

  display: flex;
  align-items: center;
  flex-direction: column;

  overflow-x: hidden;
`

export const AddLinkButton = styled.button`
  padding: 10px;
  background: var(--primary);
  border-radius: 10px;
  margin-top: 20px;

  font-size: 16px;
  font-weight: 500;

  color: white;

  transition: filter .2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Cellphone = styled.div`
  width: 30%;
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`

export const ModalCell = styled.div`
  width: 75%;
  height: 90%;
  border-radius: 55px;
  border: 10px solid black;
`