import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault(); // <form>의 default 동작인 Submit 이벤트 방지

    // 유효성 검사
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    // if (+enteredAge < 1) { // string값을 +를 넣어  Number로 변환
      if (Number(enteredAge) < 1 || Number(enteredAge) > 150) { 
        setError({
          title: 'Invalid age',
          message: 'Please enter a valid age more 0 and under 150.',
        });
      return;
    }

    console.log('addUserHandler', enteredUsername, enteredAge);

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {/* todo 아래 형태 숙지 '에러값이 있는 경우' 표현 */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* JSX에서는 <label>의 for 속성 대신 'htmlFor' 사용 */}
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};


export default AddUser;
