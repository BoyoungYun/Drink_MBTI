import React, {useState, useEffect} from 'react';
import answerList from './answerList';
import Button from 'react-bootstrap/Button';
import { useMediaQuery } from 'react-responsive';
import { useParams, useNavigate } from "react-router-dom";

function Result()
{
    let [imgSrc, setSrc] = useState("/img/default.png");
    const isDesktopOrMobile = useMediaQuery({query: '(max-width:768px)'});
    const {mbti} = useParams();
    const navigate = useNavigate();
    const [id, setID] = useState(0);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
      }, []);
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
                            <img className="mx-auto mt-3 col-lg-3 col-mg-3 col-sm-6" src={imgSrc} alt={answerList[i].m}></img>
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
                                    <img className="mx-auto my-3 col-lg-5 col-mg-3 col-sm-6" src={"/img/"+answerList[i].good_id+".png"} alt={answerList[i].good_m}></img>
                                    <h4>{answerList[i].good_m}</h4>
                                    <h4><b>{answerList[i].good}</b></h4>
                                </div>
                                <div className="matchBox mx-auto">
                                    <h4><b>최악의 궁합💔</b></h4>
                                    <img className="mx-auto my-3 col-lg-5 col-mg-3 col-sm-6" src={"/img/"+answerList[i].bad_id+".png"} alt={answerList[i].bad_m}></img>
                                    <h4>{answerList[i].bad_m}</h4>
                                    <h4><b>{answerList[i].bad}</b></h4>
                                </div>
                            </div>
                            :
                            <>
                                <div className="matchBox mx-auto">
                                    <h4><b>최고의 궁합💖</b></h4>
                                    <img className="mx-auto my-3 col-lg-5 col-mg-3 col-sm-6" src={"/img/"+answerList[i].good_id+".png"} alt={answerList[i].good_m}></img>
                                    <h4>{answerList[i].good_m}</h4>
                                    <h4><b>{answerList[i].good}</b></h4>
                                </div>
                                <div className="line my-5"></div>
                                <div className="matchBox mx-auto mb-4">
                                    <h4><b>최악의 궁합💔</b></h4>
                                    <img className="mx-auto my-3 col-lg-5 col-mg-3 col-sm-6" src={"/img/"+answerList[i].bad_id+".png"} alt={answerList[i].bad_m}></img>
                                    <h4>{answerList[i].bad_m}</h4>
                                    <h4><b>{answerList[i].bad}</b></h4>
                                </div>
                            </>
                        }
                        
                        <Button className="mt-4" size="lg" variant="outline-danger" onClick={()=>navigate('/', {state:{mbti:mbti}})}>다시하기</Button>{' '}
                        <div className="mt-4">
                            <img className="mr-3" src={"/img/icon-facebook.png"} alt="facebook" style={{cursor:'pointer'}} onClick={()=>{shareFacebook()}}></img>
                            <img className="mr-3" src={"/img/icon-kakao.png"} alt="kakao" style={{cursor:'pointer'}} onClick={()=>{shareKakao()}}></img>
                            <img src={"/img/icon-twitter.png"} alt="twitter" style={{cursor:'pointer'}} onClick={()=>{shareTwitter()}}></img>
                        </div>
                        
                        </>
                    : null
                ))
            }
            </div>
        </div>
    );

    function shareKakao()
    {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init('af60d4c4d943180d34f107e18f397b9b');
        }
        return (
            window.Kakao.Link.sendDefault({
                objectType: "feed",
                content: {
                    title: "나와 어울리는 술은?",
                    description: answerList[id].t,
                    imageUrl: "https://mbtidrink.netlify.app/img/"+answerList[id].id+".png",
                    link: {
                    mobileWebUrl: "https://mbtidrink.netlify.app/result/"+answerList[id].m,
                    },
                },
                buttons: [
                    {
                    title: "결과 확인하기",
                    link: {
                        mobileWebUrl: "https://mbtidrink.netlify.app/result/"+answerList[id].m,
                    },
                    },
                ],
            })
        );
    }
    function shareTwitter() {
        var sendText = "나와 어울리는 술은?"; // 전달할 텍스트
        var sendUrl = "https://mbtidrink.netlify.app/result/"+answerList[id].m; // 전달할 URL
        window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
    }
    function shareFacebook() {
        var sendUrl = "https://mbtidrink.netlify.app/result/"+answerList[id].m; // 전달할 URL
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
    }
}
export default Result;