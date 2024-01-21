
import './App.css';
import HomePage from './home_page/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavigationButton from './home_page/components/navigation_button';


function App() {
 
    return (
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomePage></HomePage>} />
      <Route path="/player" element={<NavigationButton></NavigationButton>} />
      </Routes>
      </BrowserRouter>
    );
  }


export default App;
