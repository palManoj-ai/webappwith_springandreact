import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div> 
      <Router>
      <HeaderComponent/>
      <div className="container">
        <Switch>
          {/*frontend localhost:3000/ or localhost:3000/employees will render listemployeecomponent.js*/}
          <Route exact path="/" component={ListEmployeeComponent}></Route>
          <Route path="/allemployees" component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" component={AddEmployeeComponent}></Route>
          {/* above path add-employee as link is defined in addemployee.js */}
          {/* <Route path={"/update-employee/:id"} component={AddEmployeeComponent}></Route> */}
          {/* (to be implemented) */}
        </Switch>
      </div>
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
