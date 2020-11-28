import React from 'react';
import NavigationBar from './components/navigationBar';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <br></br>
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;