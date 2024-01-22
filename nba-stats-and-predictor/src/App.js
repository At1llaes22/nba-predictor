
import './App.css';
import HomePage from './home_page/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavigationButton from './home_page/components/navigation_button';
import PlayerStatsPage from './stats_pages/player_stats/player_stats_page';


function App() {
 
    return (
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomePage></HomePage>} />
      <Route path="/player-stats" element={<PlayerStatsPage></PlayerStatsPage>} />
      </Routes>
      </BrowserRouter>
    );
  }


export default App;
