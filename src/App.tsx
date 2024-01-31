import './App.css';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' Component={Home}></Route>
				<Route path='/admin' Component={Admin}></Route>
			</Routes>
		</Router>
	);
}

export default App;
