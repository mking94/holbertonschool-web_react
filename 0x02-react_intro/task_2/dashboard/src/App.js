import HolbertonLogo from './HolbertonLogo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={HolbertonLogo} alt='logo' />
		<h1>School dashboard</h1>
      </div>
	   <div className='App-body'>
        <p>Login to access the full dashboard</p>
		<label for="email">Email:</label>
		<input type="text" name="email"/>
		<label for="pass" name="pass">Password:</label>
		<input type="password" name="pass" />	
		<input type="button" value="OK"/>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
      </div>
    </div>
  );
}

export default App;
