import React, {useState} from 'react';
import qnaList from './qnaList';
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";

function Question() {
    let [cnt, setCnt] = useState(0);
    let [choice, setChoice] = useState(['E','I','N','S','T','F','J','P']);
    let [point, setPoint] = useState([0,0,0,0,0,0,0,0]);
    let [mbti, setMbti] = useState('');
    return (
        <div className="outer mx-auto">
            <div className="container">
                <SwitchTransition mode="out-in">
                    <CSSTransition key={cnt} classNames="pageSlider" timeout={150}>
                        <TransitionGroup className="group">
                        {
                            cnt>11
                            ? <div className="container">
                                <div>{mbti}</div>
                            </div>
                            :
                            <div className="container">
                                <h1 className="headline">Q{cnt+1}.</h1>
                                <h1 className="qnaHeadline mb-5">{qnaList[cnt].q}</h1>
                                <div className="qnaBox px-2 py-2 mx-auto mb-3" onClick={()=>{setCnt(cnt+1); Select(qnaList[cnt].m_a);}}><span>A. {qnaList[cnt].a}<br/></span></div>
                                <div className="qnaBox px-2 py-2 mx-auto" onClick={()=>{setCnt(cnt+1); Select(qnaList[cnt].m_b);}}><span>B. {qnaList[cnt].b}</span></div>
                            </div> 
                        }
                        
                        </TransitionGroup>
                    </CSSTransition>
                </SwitchTransition>  
            </div>
        </div>
    );
    function Select(m)
    {
        let newPoint = [...point];
        for(var i=0; i<choice.length; i++)
        {
            if(m===choice[i])
            {
                newPoint[i]++;
                setPoint([...newPoint]);
            }
        }
        
        if(cnt===11)
        {
            let mbtiArr = [];
            for(var i=0; i<point.length-1; i++)
            {
                if(point[i]>point[i+1]) mbtiArr.push(choice[i]);
                else mbtiArr.push(choice[i+1]);
                i++;
            }
            setMbti(mbtiArr.join(''));
        }
    }
}



export default Question;
