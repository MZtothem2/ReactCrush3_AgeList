import React from 'react';

import classes from './Card.module.css';
// cf) import './Card.module.css'; => 이 형태는 컴포넌트 전체에 해당 경로의 css를 적용하겠다는 것. 모듈형태가 아님 주의

const Card = (props) => {
  // css module 사용
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
