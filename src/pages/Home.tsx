import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";

const Home = () => {
  const handleClick = () => {
    alert(`공모전 모집 게시판입니다.`);
  };

  return (
    <div className='bg-gray-100 p-5'>
      <Title>Title</Title>
      <InputText placeholder='InputText'></InputText>
      <Button onClick={handleClick}>Button</Button>
    </div>
  );
};

export default Home;
