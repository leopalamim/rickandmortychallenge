import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'atomic/obj.globals/global.style';
import { Header } from '../../../atomic/org.header/header.component';
import { Footer } from '../../../atomic/org.footer/footer.component'

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <Header />
    <App />
    <Footer />
  </Router>,
  document.getElementById('root')
);

