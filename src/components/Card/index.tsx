
import Image from 'next/image';
import { CardStyled, Breed } from './styles';

const Card = () => {
  return (
    <CardStyled>
      <Image src='/1.jpg' alt='' width='324' height='319' />

      <Breed>Vira Lata</Breed>

      <footer>
        <strong>Origin: <span>Brazil</span></strong>
        <strong>Weight: <span>5kg</span></strong>
        <strong>Lifespan: <span>20y</span></strong>
      </footer>
    </CardStyled>
  );
}

export default Card;