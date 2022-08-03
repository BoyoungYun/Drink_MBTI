import React from 'react';
import './main.css';
import Main from './main.js';
import Question from './question.js';
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./transition.css";

function App() {
    const location = useLocation();
    return (
        <div className="App">
                <TransitionGroup className="transition-group">
                    <CSSTransition key={location.pathname} classNames="pageSlider" timeout={500}> 
                        <Routes location={location}>
                            <Route path='/' element={<Main/>}/>
                            <Route path='/question' element={<Question/>}/>
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
        </div>
    );
}

export default App;
