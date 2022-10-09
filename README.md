
# S9. ref 심화

## 1. div 수프 
React의 컴포넌트 트리가 복잡해질 수록
컴포넌트의 최상위를 감싸는 div를 반복하게 되는데 이를 div soup라고 함.
이에 대응하는 방식 필요

### 1-1. Wrapper 컴포넌트 사용
src/components/Helpers/Wrapper.js
- html요소 없이 오로지 값만을 return
- 각 컴포넌트 최상위를 <Wrapper>로 감싸면, 하나의 값만return 한다는 js 조건 충족. 더불어 실제 DOM에 html 요소를 생성하지 않음.

### 1-2. React에서 제공하는 Fragment 사용
- 위와 동일한 원리



## 2. React Portal
- 엄밀히 말하면 modal은 요소 중 가장 위에 위치하는게 알맞음. 
- 컴포넌트 형태로 modal를 사용하면 위치가 고정되지 않아, 단순한 페이지에는 문제 없어 보일수 있으나 복잡한 페이지에서는 기능적 문제 야기 가능
- React에서 제공하는 포탈 사용하여, 실제로 DOM에서 modal컴포넌트를 최상위에 위치하도록 가능



## 3. ref
- 컴포넌트에서 ref를 만들고, 이를 렌더링하는 JSX에 연결을 설정함: useRef();
- current prop을 가진 객체를 반환받을 수 있음. current: 실제 DOM 노드
- DOM은 리액트에 의해서만 제어되는 것이 좋으므로 별도의 조작은 권장X, 
  input값 등 현재의 값을 읽는 정도로 추천
- 제어되는(controlled) 컴포넌트 / 제어되지 않는(uncontrolled) 컴포넌트 구분 필요
    ** 참고 
    https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/
    https://velog.io/@yukyung/React-제어-컴포넌트와-비제어-컴포넌트의-차이점-톺아보기