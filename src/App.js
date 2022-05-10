import './App.css';

import { createContext, useState } from "react";
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import './Components/Slider.css'


const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>

        <Navbar />
        <Weather />
        
        {/* <label class="switch">
          <input onChange={toggleTheme} type="checkbox" />
          <span class="slider round"></span>
        </label> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;