import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4rem;
`;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #DDDDDD;
  border-right: none;
  border-radius: .25rem 0 0 .25rem;
  height: 1.5rem;
  padding: 0 .5rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

const Button = styled.button`
  height: 1.6rem;
  border: 1px solid #000000;
  background: #000000;
  color: #FFFFFF;
  padding: 0 .5rem;
  border-radius: 0 .25rem .25rem 0;
  transition: all .3s ease;

  &:hover {
    cursor: pointer;
    background: #FFFFFF;
    color: #000000;
  }
`;

const Small = styled.small`
  color: #AAAAAA;
`;

const ErrorMsg = styled.span`
  color: #FF0000;
  font-weight: bold;
`;

export { Title, Container, InputContainer, Input, Button, Small, ErrorMsg };