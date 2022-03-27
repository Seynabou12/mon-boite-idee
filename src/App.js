import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './pages/Form.js';
import Header from './pages/Header.js';
import './App.css';
import Liste from './pages/Liste.js';
import Carte from './pages/Carte.js';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Form />
        <Liste />
      </div>
    </BrowserRouter>
  );
}

export default App;
