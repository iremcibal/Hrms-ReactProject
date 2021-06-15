import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import FirstPage from './pages/FirstPage'
import DashBoard from './layouts/DashBoard';
import Navi from './layouts/Navi';
import CandidateFormSignUp from './pages/CandidateFormSignUp';
import JobPost from './pages/JobPost';


function App() {
  return (
    <div className="App">
        <Container>
          <DashBoard/>
        </Container> 
         
        

    </div>
  );
}

export default App;
