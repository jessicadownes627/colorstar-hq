import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LooksList from './pages/LooksList';
import CelebLook from './pages/CelebLook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LooksList />} />
        <Route path="/look/:lookId" element={<CelebLook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
