import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Title, Container, InputContainer, Input, Button, Small, ErrorMsg } from './styled';

export function Home({ title, subtitle, placeholder }) {
  const [ user, setUser ] = useState("");
  const [ error, setError ] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then(res => {
        const repositories = res.data;
        const repositoriesName = [];
        repositories.map(repository => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem("repositoriesName", JSON.stringify(repositoriesName));
        setError(false)
        navigate(`/repositories`);
      })
      .catch(error => {
        setError(true);
        setTimeout(() => setError(false), 5000);
      });
  }

  return (
    <Container>
      <Title>{title}{subtitle}</Title>
      <InputContainer className="Home">
        <Input 
          className="userInput"
          placeholder={placeholder} 
          value={user}
          onChange={event => setUser(event.target.value)}
          />
        <Button onClick={handleSearch}>Pesquisar</Button>
      </InputContainer>
      <p><Small>Digite o nome do usuário para ver os repositórios</Small></p>
      { error ? <ErrorMsg>Usuário não encontrado</ErrorMsg> : "" }
      
    </Container>
  )
}