import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import { useLocation } from 'wouter';
import { useEffect } from 'react';

export default function App() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
  return <div className="route-transition" key={location}><Switch>
    <Route path="/" component={Home} />
    <Route path="/lets-work-together" component={ContactPage} />
    <Route path="/service/:slug" component={ServicePage} />
    <Route path="/project/:slug" component={ProjectPage} />
    <Route component={NotFound} />
  </Switch></div>;
}
