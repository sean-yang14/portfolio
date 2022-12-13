import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from '../src/pages/Home';
import ProjectPage from '../src/pages/ProjectPage';
import NotFound from '../src/pages/NotFound';
import Resume from '../src/pages/Resume';
import { ProjectProvider } from './context/project/ProjectContext';

function App() {
	return (
		<ProjectProvider>
			<Router>
				<div lassName='flex flex-col justify-between h-screen'>
					<Navbar />
					<main>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/resume' element={<Resume />} />
							<Route path='/project/:name' element={<ProjectPage />} />
							<Route path='/notfound' element={<NotFound />} />
							<Route path='/*' element={<NotFound />} />
						</Routes>
					</main>
				</div>
			</Router>
		</ProjectProvider>
	);
}

export default App;
