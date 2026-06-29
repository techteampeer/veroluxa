import Layout from './components/Layout.jsx'
import RootRedirect from './components/RootRedirect.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// Route table (react-router data-router format) consumed by ViteReactSSG.
export const routes = [
  { path: '/', element: <RootRedirect /> },
  {
    path: ':lang',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  { path: '*', element: <RootRedirect /> },
]
