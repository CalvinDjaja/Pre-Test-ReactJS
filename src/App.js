import { useState } from 'react';
import "./App.css";
import Header from './components/Header';
import Home from './pages/Home';
import Feature from './pages/Feature';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';


function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Feature />}
    else if(menu === 3) {return <AboutUs />}
  }

  return (
    <div className="App">
      <Header onClick={setMenu} />
      
      {content()}
      
      <Footer />

    </div>
  );
}

export default App;
