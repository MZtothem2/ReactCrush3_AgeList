import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    // Card UI형태 유지 위해 Card Componont로 감쌈
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
          {/* todo 아래 형태 숙지하기 {}안 ()는 텍스트 표현*/}
          {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
