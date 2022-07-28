import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  color: #333333;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
`;

const ListItem = styled.li`
  margin: .5rem 0;
  background: #000000;
  color: #FFFFFF;
  padding: .5rem;
`;

const Button = styled.button`
  height: 1.6rem;
  border: 1px solid #000000;
  background: #000000;
  color: #FFFFFF;
  padding: 0 .5rem;
  border-radius: .25rem;
  transition: all .3s ease;

  &:hover {
    cursor: pointer;
    background: #FFFFFF;
    color: #000000;
  }
`;

export { Container, Title, List, ListItem, Button };