/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import { ChakraProvider } from '@chakra-ui/react'
import ProductsScreen from './screens/ProductsScreen';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingScreen from './screens/LandingScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import EmailVerificationScreen from './screens/EmailVerificationScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/products' element = {<ProductsScreen />} />
            <Route path='/' element = {<LandingScreen />} />
            <Route path='/product/:id' element = {<ProductScreen />} />
            <Route path='/cart' element = {<CartScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/email-verify/:token' element={<EmailVerificationScreen />} />
            <Route path='/password-reset/:token' element={<PasswordResetScreen />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;