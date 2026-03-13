import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar/Sidebar.js';
import './Sidebar/Sidebar.css'; 
import User from './User.js';


function App() {
  const name = "John Doe";
  const age = 30;
  const role = "Developer";
  return (
    <div className="App">
      <Header />
      <div className="container btn btn-primary">
      <Sidebar />
      <div className="content">
      <h2>Welcome To My App</h2>
      <User name={name} age={age}  role={role}/>
    </div>
    </div>
    </div>
  );
}

export default App;
