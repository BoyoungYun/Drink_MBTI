import React, {useState} from 'react';
import qnaList from './qnaList';
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import { Link } from 'react-router-dom';

function Question() {
    let [cnt, setCnt] = useState(0);
    return (
        <div className="outer mx-auto">
            <div className="container">
                <SwitchTransition mode="out-in">
                    <CSSTransition key={cnt} classNames="pageSlider" timeout={150}>
                        <TransitionGroup className="group">
                        <h1 className="headline">Q{cnt+1}.</h1>
                        <h1 className="qnaHeadline mb-5">{qnaList[cnt].q}</h1>
                        <div className="qnaBox px-2 py-2 mx-auto mb-3" onClick={()=>setCnt(cnt+1)}><span>A. {qnaList[cnt].a}<br/></span></div>
                        <div className="qnaBox px-2 py-2 mx-auto" onClick={()=>setCnt(cnt+1)}><span>B. {qnaList[cnt].b}</span></div>
                        </TransitionGroup>
                    </CSSTransition>
                </SwitchTransition>  
            </div>
        </div>
    );
    
}


export default Question;
