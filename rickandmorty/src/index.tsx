import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'components/global.style';
import { Header } from './components/header.component';
import { Footer } from './components/footer.component'

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <Header />
    <App />
    <Footer />
  </Router>,
  document.getElementById('root')
);

