import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
