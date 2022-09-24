import { HomeContainer, ImgWrapper, Img } from '../components/App/App.styled';
import image from '../image/istockphoto-177503800-612x612.jpg';

export default function HomePage() {
  return (
    <HomeContainer>
      <h1>Welcome to phonebook!</h1>
      <ImgWrapper>
        <Img src={image} alt="phonebook" width="320" />
      </ImgWrapper>
    </HomeContainer>
  );
}
