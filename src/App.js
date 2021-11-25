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
import ArticleInner from './pages/ArticleInner/ArticleInner';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/article" element={<ArticleInner />}></Route>
            </Routes>
        </Router>
    )
}

export default App;
