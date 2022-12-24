import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from '../src/pages/Home';
import NotFound from '../src/pages/NotFound';
import Projects from '../src/pages/Projects';
import { ProjectProvider } from './context/project/ProjectContext';
import About from './pages/About';

function App() {
	return (
		<ProjectProvider>
			<Router>
				<div>
					<Navbar />
					<main>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/projects' element={<Projects />} />
							<Route path='/about' element={<About />} />
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
