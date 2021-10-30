import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch,Redirect } from 'react-router-dom';
import Home from './home/Home'
import Dashboard from './dashboard/Dashboard';
import Account from './account/Account';
import Addaccount from './account/Addaccount';
import Expense from './Expense/Expense';
import Expform from './Expense/Expform';
import Income from './Income/Income';
import AddIncome from './Income/AddIncome';
import Month from './budget/Month';
import Week from './budget/Week';
import Year from './budget/Year';
import Form from './formpage/Form';
import Login from './login/Login';
import Reg from './login/Reg';
import Chart from './Chart/Chart';
import Forecast from './Chart/Forecast';
import Barchart from './Chart/Barchart';
import Piechart from './Chart/Piechart';
import Help from './Help/Help';
import Transaction_month from './transaction/Transaction_month';
import Updatetransaction from './updateform/Updatetransaction';
import Updateforms from './updateform/Updateforms';
import Updatebudget from './updatebudget/Updatebudget';
import ProtectedRoute from './ProtectedRoutes';



function App() 
{
  const user=localStorage.getItem("userid");
  
  return (
    <div>
       <Router>
        <Switch>
          <ProtectedRoute exact path="/account" component={Account}  user={user}/>
          <ProtectedRoute exact path="/addaccount" component={Addaccount}  user={user}/>
          <ProtectedRoute exact path="/expense" component={Expense}  user={user}/>
          <ProtectedRoute exact path='/expform' component={Expform}  user={user}/>
          <ProtectedRoute exact path='/income' component={Income}  user={user}/>
          <ProtectedRoute exact path='/addincome' component={AddIncome}  user={user}/>
          <ProtectedRoute exact path='/month' component={Month}  user={user}/>
          <ProtectedRoute exact path='/week' component={Week}  user={user}/>
          <ProtectedRoute exact path='/year' component={Year}  user={user}/>
          <ProtectedRoute exact path='/Form' component={Form}  user={user}/>
          
          <ProtectedRoute exact path="/chart" component={Chart}  user={user}/>
          <ProtectedRoute exact path="/Forecast" component={Forecast}  user={user}/>
          <ProtectedRoute exact path="/barchart" component={Barchart}  user={user}/>
          <ProtectedRoute exact path="/piechart" component={Piechart}  user={user}/>
          
          <ProtectedRoute exact path='/trans' component={Transaction_month}  user={user}/>
          <ProtectedRoute exact path='/updateform' component={Updatetransaction}  user={user}/>
          <ProtectedRoute exact path='/updateforms' component={Updateforms}  user={user}/>
          <ProtectedRoute exact path='/updatebudget' component={Updatebudget}  user={user}/>
          <ProtectedRoute exact path="/dashbord" component={Dashboard} user={user}/>
          <ProtectedRoute exact path='/help' component={Help} user={user}/>
          {user?<Redirect to='/dashbord'/>:""} 
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Reg}/>
          <Route exact path="/" component={Home}/>



          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
