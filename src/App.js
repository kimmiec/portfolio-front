import './App.css';
import Resume from './pages/Resume';
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
          <About URL={URL} />
        </Route>

        <Route path='/projects'>
          <Projects URL={URL} />
        </Route>

        <Route path='/resume'>
          <Resume URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
