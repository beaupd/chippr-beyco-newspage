import React from 'react';
import GlobalStyle from './globalStyles';

// Import router
import {
    Route,
    Routes,
    BrowserRouter as Router
} from 'react-router-dom';

// Import global elements
import Header from './components/Header/Header';

// Import pages
import Home from './pages/Home/Home';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    )
}

export default App;
