import {Link, Routes, Route} from 'react-router-dom';

import Home from './components/Home'
import Frutas from './components/Frutas'
import RickMorty from './components/RickMorty'


function App() {
  return (
    <>
		<Link to="/">Home</Link> <br />
		<Link to="/frutas">Frutas</Link> <br />
		<Link to="/rick-morty">Rick & Morty</Link> <br />

		<hr />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/frutas" element={<Frutas />} />
			<Route path="/rick-morty" element={<RickMorty />} />
			
		</Routes>
		
		
    </>
  );
}

export default App;
