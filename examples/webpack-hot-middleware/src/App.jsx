import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChatModal from './components/ChatModal';

// Lazy load the pages
const AdminPage = lazy(() => import('./pages/AdminPage'));
const StorePage = lazy(() => import('./pages/StorePage'));

function App() {
  return (
    <Router>
      <div>
        <nav style={{
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          marginBottom: '1rem'
        }}>
          <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>
            Home
          </Link>
          <Link to="/admin" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>
            Admin
          </Link>
          <Link to="/store" style={{ textDecoration: 'none', color: '#007bff' }}>
            Store
          </Link>
        </nav>

        <Suspense fallback={<div style={{ padding: '20px' }}>Loading...</div>}>
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/" element={
              <div style={{ padding: '20px' }}>
                <h1>Welcome to Our App</h1>
                <p>Choose a section from the navigation above.</p>
                <ChatModal />
              </div>
            } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
