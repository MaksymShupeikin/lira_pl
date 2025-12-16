import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/product/:code" element={<ProductPage />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;