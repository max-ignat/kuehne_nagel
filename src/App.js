import Navbar from './modules/Navbar';
import { HomePage } from './pages/HomePage/HomePage';
import MovieSearch from './pages/MovieSearch/MovieSearch';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound/NotFound';

import SingleMoviePage from './pages/SIngleMoviePage/SingleMoviePage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />} />
           <Route path='/movies-search' element={<MovieSearch submitPropValue/>}   />  
            
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
