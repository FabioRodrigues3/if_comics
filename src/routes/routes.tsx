import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from '../layout/DefaultLayout';
import { Home } from '../pages/Home';
import { Login } from '../components/Login';
import { ProtectedLayout } from '../layout/ProtectedLayout';

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
				<Route path="/login" element={<Login />}></Route>

				<Route path="/create-work" element={<ProtectedLayout />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
