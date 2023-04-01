import { AuthProvider } from './contexts/auth';
import { AppRoutes } from './routes/routes';
import { GlobalStyle } from './styles/global';
function App() {
	return (
		<div>
			<GlobalStyle />
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</div>
	);
}

export default App;
