import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Repositories } from './pages/Repositories';

export function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home title="Get" subtitle="Git" placeholder="Usuário" />} />
        <Route path='/repositories' element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}