import NavBar from './components/navbar/NavBar';
import { useAuth } from '@utils/hooks';
import './App.css';

function App() {
  const {auth, setAuth} = useAuth()
  return (
    <>
      <div className='App'>
        <NavBar />
        <div>store</div>
        <div>{'is auth ' + auth}</div>
        <button onClick={() => setAuth(!auth)}>enter</button>
      </div>
    </>
  );
}

export default App;
