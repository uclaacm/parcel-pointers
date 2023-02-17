import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Demo from './pages/Demo';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import PointerMotivation from './pages/PointerMotivation';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pointer-motivation" element={<PointerMotivation />} />
          <Route path="/lesson-1" element={<Lesson1 />} />
          <Route path="/lesson-2" element={<Lesson2 />} />
          <Route path="/lesson-3" element={<Lesson3 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
