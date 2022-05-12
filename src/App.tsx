import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Demo from './pages/Demo';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Lesson1 from './pages/Lesson1';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/lesson-1" element={<Lesson1 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
