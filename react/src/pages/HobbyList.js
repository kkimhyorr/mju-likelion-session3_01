import Hobby from "./Hobby";

const HobbyList = (props) => {
  const { hobby } = props.data;
  return (
    <>
      <h3>HOBBY</h3>
      <div className="wrapHobby">
        {hobby.map((data, index) => (
          <Hobby data={data} key={index} isDark={props.dark} /> // map은 무조건 key값이 들어가야함
        ))}
      </div>
    </>
  );
};

export default HobbyList;
