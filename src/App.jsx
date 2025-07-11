import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="bg-gray-800 text-gray-200 min-h-screen">
          <Header />
          <div className="mx-auto min-h-[calc(100vh-3rem)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/editor" element={<EditorPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;