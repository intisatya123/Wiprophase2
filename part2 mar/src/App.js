// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import UserShow from './components/UserShow/userShow';
import PostShow from './components/PostShow/postShow';
import EmployShow from './components/EmployShow/employShow';
import UserSearch from './components/UserSearch/userSearch';
import EmploySearch from './components/EmploySearch/employSearch';
import PostSearch from './components/PostSearch/postSearch';
import EmployInsert from './components/EmployInsert/employInsert';

function App() {
  return (
    <div className="App">
      <UserShow/>
      <PostShow/>
      <EmployShow/>
      <UserSearch/>
      <EmploySearch/>
      <PostSearch/>
      <UserSearch/>
      <EmployInsert/>
    </div>
  );
}

export default App;