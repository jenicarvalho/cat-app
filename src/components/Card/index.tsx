import Image from 'next/image';
import Heart from '../Heart';
import { CardStyled, Breed, Overlay, Info } from './styles';

const Card = ({ content }) => {
  const { url, breeds } = content;
  const { name, origin, life_span, weight } = breeds[0];

  return (
    <CardStyled >
      <Overlay href="/detail" favorited={false}>
        <Image src={url} alt='cat' width='324' height='319' />
      </Overlay>

      <Info>
        <Breed href="/detail">
          {name}
        </Breed>
        <Heart favorited={true} />
      </Info>

      <footer>
        <strong>Weight: <span>{weight?.imperial}</span></strong>
        <strong>Lifespan: <span>{life_span}</span></strong>
        <strong>Origin: <span>{origin}</span></strong>
      </footer>
    </CardStyled>
  );
}

export default Card;