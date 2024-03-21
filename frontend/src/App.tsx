import './App.css';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path='/' Component={Home}></Route>
					<Route path='/search' Component={Search}></Route>

					<Route path='/login' Component={Login}></Route>
					<Route path='/admin' Component={Admin}></Route>
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
