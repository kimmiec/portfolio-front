import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';


function App() {

  // URL should have heroku url for backend, have to have trailing /
  const URL = 'https://kimmie-portfolio.herokuapp.com/'
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/projects'>
          <Projects URL={URL} />
        </Route>

        <Route path='/about'>
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
