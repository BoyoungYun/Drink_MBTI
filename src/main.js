import React from 'react';
import mainImg from './img/main.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="outer mx-auto">
      <div className="container">
      <div className="main mx-auto pb-5">
        <h1 className="headline pt-5 py-3 px-5">나와 어울리는 술은 뭘까?</h1>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mx-auto mb-4 px-3">
          <img src={mainImg} className="img-fluid"></img>
        </div>
        <span>오늘 술 마시고 싶은데... <br/> 무슨 술을 마실지 잘 모르겠을 때! <br/> MBTI로 알아보는 당신과 딱 맞는 술<br/></span>
          <div className="mt-3 mb-2">
            <Link to='/question'>
              <Button className="mt-3" size="lg" variant="outline-danger">시작하기</Button>{' '}
            </Link>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Main;
