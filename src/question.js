import React, {useState} from 'react';
import qnaList from './qnaList';
import answerList from './answerList';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import { useMediaQuery } from 'react-responsive';

function Question() {
    let [cnt, setCnt] = useState(0);
    let [choice, setChoice] = useState(['E','I','N','S','T','F','J','P']);
    let [point, setPoint] = useState([0,0,0,0,0,0,0,0]);
    let [mbti, setMbti] = useState('');
    let endPoint = 11;
    let status = (100/endPoint)*cnt;
    let [imgSrc, setSrc] = useState("/img/0.png");
    const isDesktopOrMobile = useMediaQuery({query: '(max-width:768px)'});
    return (
        <div className="outer mx-auto">
            <div className="container">
                <SwitchTransition mode="out-in">
                    <CSSTransition key={cnt} classNames="pageSlider" timeout={150}>
                        <TransitionGroup className="group">
                        {
                            cnt>11
                            ? <div className="container">
                                
                                    <h1 className="headline mt-5 mb-5">당신과 어울리는 술은...</h1>
                                    <div className="main mx-auto mb-5 pb-5 px-4">                                    
                                        {
                                            answerList.map((ans,i)=>(
                                                mbti===answerList[i].m
                                                ?
                                                    <>
                                                    <div className="mx-auto" onLoad={()=>setSrc("/img/"+answerList[i].id+".png")}>
                                                        <img className="mx-auto mt-3 col-lg-3 col-mg-3 col-sm-6" src={imgSrc}></img>
                                                    </div>
                                                    <div className="answerBox" style={{textAlign:'center'}}> 
                                                        <h3 className="mt-3">{"- "+answerList[i].m+" -"}</h3>
                                                        <h3 className="mb-5"><b>{answerList[i].t}</b></h3>
                                                    </div>
                                                    <div className="line my-5"></div>
                                                    <div className="answerBox">
                                                        <span dangerouslySetInnerHTML={{__html:answerList[i].a}}></span>
                                                    </div>
                                                    <div className="line my-5"></div>
                                                    {
                                                        isDesktopOrMobile !== true
                                                        ?
                                                        <div className="mt-5" style={{display:'flex'}}>
                                                            <div className="matchBox mx-auto">
                                                                <h4><b>최고의 궁합💖</b></h4>
                                                                <img className="mx-auto my-3 col-lg-5 col-mg-3 col-sm-6" src={"/img/"+answerList[i].good_id+".png"}></img>
                                                                <h4>{answerList[i].good_m}</h4>
                                                                <h4><b>{answerList[i].good}</b></h4>
                                                            </div>
                                                            <div className="matchBox mx-auto">
                                                                <h4><b>최악의 궁합💔</b></h4>
                                                                <img className="mx-auto my-3 col-lg-5 col-mg-3 col-sm-6" src={"/img/"+answerList[i].bad_id+".png"}></img>
                                                                <h4>{answerList[i].bad_m}</h4>
                                                                <h4><b>{answerList[i].bad}</b></h4>
                                                            </div>
                                                        </div>
                                                        :
                                                        <>
                                                            <div className="matchBox mx-auto">
                                                                <h4><b>최고의 궁합💖</b></h4>
                                                                <img className="mx-auto my-3 col-lg-5 col-mg-3 col-sm-6" src={"/img/"+answerList[i].good_id+".png"}></img>
                                                                <h4>{answerList[i].good_m}</h4>
                                                                <h4><b>{answerList[i].good}</b></h4>
                                                            </div>
                                                            <div className="line my-5"></div>
                                                            <div className="matchBox mx-auto mb-4">
                                                                <h4><b>최악의 궁합💔</b></h4>
                                                                <img className="mx-auto my-3 col-lg-5 col-mg-3 col-sm-6" src={"/img/"+answerList[i].bad_id+".png"}></img>
                                                                <h4>{answerList[i].bad_m}</h4>
                                                                <h4><b>{answerList[i].bad}</b></h4>
                                                            </div>
                                                        </>
                                                    }
                                                    
                                                    <Link to='/'>
                                                    <Button className="mt-4" size="lg" variant="outline-danger">다시하기</Button>{' '}
                                                    </Link>
                                                    </>
                                                : null
                                            ))
                                        }
                                        
                                    
                                </div>
                            </div>
                            :
                            <div className="container">
                                <h1 className="headline">Q{cnt+1}.</h1>
                                <div className="status mx-auto">
                                    <div className="statusBar" style={{width:status+'%'}}></div>
                                </div>
                                <div className="qnaHeadline mb-5 mt-2" style={{fontSize:'15px', color:'#cd3b3b'}}>{cnt+1}/12</div>
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
