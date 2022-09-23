import { ThreeCircles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeCircles
        color="#3f51b5"
        width={30}
        height={30}
        ariaLabel="three-circles-rotating"
      />
    </LoaderContainer>
  );
};

export default Loader;
