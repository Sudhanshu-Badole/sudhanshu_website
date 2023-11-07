import "./app.scss"
import Work from "../src/components/lastest_work/Work";
import About from "../src/components/about/About";
import Index from "../src/components/layout";

import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

const App = () => {
  return (
    <Router>
            <Routes>
                <Route exact path='/' element={<Index />} />
                <Route exact path='/work' element={<Work />} />
                <Route exact path='/about' element={<About/>} />
            </Routes>
        </Router>
  );

};

export default App;
