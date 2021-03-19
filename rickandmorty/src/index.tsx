import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/app/modules/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'src/atomic/obj.globals/global.style';
import { Header } from 'src/atomic/org.header/header.component';
import { Footer } from 'src/atomic/org.footer/footer.component';

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <Header />
    <App />
    <Footer />
  </Router>,
  document.getElementById('root')
);

