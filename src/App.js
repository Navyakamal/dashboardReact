import { Route ,Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/dashboard/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
      </Routes>
    </div>
  );
}

export default App;
