import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';


import DashBoard from './layouts/DashBoard';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
        <Container>
          <DashBoard/>
        </Container> 
        <Footer/>
         
        

    </div>
  );
}

export default App;
