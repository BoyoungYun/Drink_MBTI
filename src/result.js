import React, {useState} from 'react';
import answerList from './answerList';
import Button from 'react-bootstrap/Button';
import { useMediaQuery } from 'react-responsive';
import { useParams, useNavigate } from "react-router-dom";

function Result()
{
    let [imgSrc, setSrc] = useState("/img/0.png");
    const isDesktopOrMobile = useMediaQuery({query: '(max-width:768px)'});
    const {mbti} = useParams();
    const navigate = useNavigate();
    const [id, setID] = useState(0);
    return (
        <div className="container" style={{display:'block'}}>
        <h1 className="headline mt-5 mb-5">당신과 어울리는 술은...</h1>
        <div className="main mx-auto mb-5 pb-5 px-4">                                    
            {
                answerList.map((ans,i)=>(
                    mbti===answerList[i].m
                    ?
                        <>
                        <div className="mx-auto" onLoad={()=>{setSrc("/img/"+answerList[i].id+".png"); setID(answerList[i].id);}}>
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
                        
                        <Button className="mt-4" size="lg" variant="outline-danger" onClick={()=>navigate('/', {state:{mbti:mbti}})}>다시하기</Button>{' '}
                        </>
                    : null
                ))
            }
            </div>
        </div>
    );
    
}
export default Result;