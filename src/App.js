
import { useSelector } from 'react-redux';
import './App.css';
import DarkModeToggle from './components/DarkModeToggle';
import ImageGrid from './components/ImageGrid';
import Paginations from './components/Paginations';

function App() {
  const darkMode = useSelector((state)=>state.theme.darkMode)
  
  return (
    <div className={`py-5 min-h-screen  ${darkMode?"bg-black":"bg-white"}`}>
      <h1 className={`text-4xl font-bold text-center font-mono ${darkMode? "text-white": "text-black"}` }>Photo Gallery</h1>
      <DarkModeToggle/>
      <ImageGrid/>
      <Paginations/>
      
    </div>
  );
}

export default App;
