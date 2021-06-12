import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import DashBoard from './layouts/DashBoard';
import Navi from './layouts/Navi';


function App() {
  return (
    <div className="App">
      
        <Navi/>
        <Container>
          <DashBoard/>
        </Container>
        

    </div>
  );
}

export default App;
