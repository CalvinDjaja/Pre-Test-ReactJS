import { useState } from 'react';
import "./App.css";
import Header from './components/Header';
import Home from './pages/Home';
import Feature from './pages/Feature';


function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Feature />}
  }

  return (
    <div className="App">
      <Header onClick={setMenu} />
      {content()}
      test
    </div>
  );
}

export default App;
