//styles
import './App.css';

//routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import HomePage from './pages/home/HomePage';
import JavascriptPage from './pages/javascript/JavascriptPage'
import FirebasePage from './pages/firebase/FirebasePage'
import ReactPage from './pages/react/ReactPage'
import StylePage from './pages/styling/StylePage'

//components
import Navbar from './components/navigation/Navbar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/javascript' element={<JavascriptPage />} />
          <Route path='/react' element={<ReactPage />} />
          <Route path='/firebase' element={<FirebasePage />} />
          <Route path='/style' element={<StylePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
