import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [infosUser, setInfosUser] = useState([]);

  useEffect(() => {
   fetch("https://api.github.com/users/JohnnyDev2001")
   .then(Response => Response.json())
   .then(data => setInfosUser(data)) 
  }, []);

  return (
    <div className="App">
      <img src={infosUser.avatar_url} alt="" srcset="" />
      <h2>Nome: {infosUser.name}</h2>
      <h3>Login: {infosUser.login}</h3>
    </div>
  );
}

export default App;
