import React, {useState} from 'react';
import qnaList from './qnaList';
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router-dom";

function Question() {
    let [cnt, setCnt] = useState(0);
    let choice = ['E','I','N','S','T','F','J','P'];
    let [point, setPoint] = useState([0,0,0,0,0,0,0,0]);
    let mbti='';
    let endPoint = 11;
    let status = (100/endPoint)*cnt;
    const navigate = useNavigate();
    return (
        <div className="outer mx-auto">
            <div className="container">
                <SwitchTransition mode="out-in">
                    <CSSTransition key={cnt} classNames="pageSlider" timeout={150}>
                        <TransitionGroup className="group">
                            {
                                cnt<12
                                ? <div className="container">
                                    <h1 className="headline">Q{cnt+1}.</h1>
                                    <div className="status mx-auto">
                                        <div className="statusBar" style={{width:status+'%'}}></div>
                                    </div>
                                    <div className="qnaHeadline mb-5 mt-2" style={{fontSize:'15px', color:'#cd3b3b'}}>{cnt+1}/12</div>
                                    <h1 className="qnaHeadline mb-5">{qnaList[cnt].q}</h1>
                                    <div className="qnaBox px-2 py-2 mx-auto mb-3" onClick={()=>{setCnt(cnt+1); Select(qnaList[cnt].m_a);}}><span>A. {qnaList[cnt].a}<br/></span></div>
                                    <div className="qnaBox px-2 py-2 mx-auto" onClick={()=>{setCnt(cnt+1); Select(qnaList[cnt].m_b);}}><span>B. {qnaList[cnt].b}</span></div>
                                </div>
                                : null
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
            for(var j=0; j<point.length-1; j++)
            {
                if(point[j]>point[j+1]) mbtiArr.push(choice[j]);
                else mbtiArr.push(choice[j+1]);
                j++;
            }
            mbti=mbtiArr.join('');
            navigate(`/result/${mbti}`);
        }
    }
}



export default Question;
