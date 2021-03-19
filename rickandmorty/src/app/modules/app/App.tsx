import Home from '../components/home/home'
import { Switch, Route } from 'react-router-dom';
import CharacterPage from 'app/modules/components/character/character';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/:slug" component={CharacterPage} />
      </Switch>
    </div>
  );
}

export default App;
