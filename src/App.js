import './App.css';
import Links from './components/Links';
import Header from './components/Header.js';
import Footer from './components/Footer';

const App = () => {

  return (
    <div id="site-container" className="App container py-3">
      <Header/>
      <Links/>
      <Footer/>
    </div>
  );
}

export default App;