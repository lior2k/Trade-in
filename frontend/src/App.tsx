import './App.css';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Admin from './pages/Admin/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' Component={Home}></Route>
				<Route path='/admin' Component={Admin}></Route>
				<Route path='/search' Component={Search}></Route>
			</Routes>
		</Router>
	);
}

export default App;
