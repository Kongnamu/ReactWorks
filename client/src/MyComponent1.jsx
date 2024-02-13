
const MyComponent = (props) => {
  //props : 속성을 부모 컴포넌트 -> 자식 컴포넌트로 옮겨줌
  //비구조화 할당
  const {name, age} = props //props.name, props.age


  return(
    <>
      <div>
        {/* <h3>아무노래 {props.name}<br />
        왜들그리 다운되있어{props.age}<br />
        뭐가 문제야 Say Something
        </h3> */}
        <h3>아무노래 {name}<br />
        왜들그리 다운되있어{age}<br />
        뭐가 문제야 Say Something
        </h3>
      </div>
    </>
  );
}

// Component 사용시 외부에 내보내기가 필수임
export default MyComponent