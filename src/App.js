import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './pages/Form.js';
import Header from './pages/Header.js';
import './App.css';
import Liste from './pages/Liste.js';
import Carte from './pages/Carte.js';


function App() {
  return (

    <div className='container'>

      <Header />
      <Form />
      <Liste />
      <Carte />
    </div>
  );
}

export default App;
