import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Generate from './components/Generate';

const ChangeRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ChangeRoute;
