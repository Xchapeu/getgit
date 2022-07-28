import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, List, ListItem, Button } from './styled';

export const Repositories = () => {

  const [repositories, setRepositories] = useState([]);

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
    localStorage.clear();
  }
  
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    
    if(repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
    } else {
      navigate('/');
    }
      
  }, []);

  return(
    <Container>
      <Title>Repositories</Title>
      <List>
      { repositories.map(repository => <ListItem key={repository}>Repositório: {repository}</ListItem>) }
      <Button onClick={goHome}>Voltar</Button>
      </List>
    </Container>
  );
}