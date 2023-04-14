import Image from 'next/image';
import Heart from '../Heart';
import { CardStyled, Breed, Overlay, Info } from './styles';

const Card = ({ content }) => {
  const { url, breeds, id } = content;
  const { name, origin, life_span, weight } = breeds;


  return (
    <CardStyled>
      <Overlay href={`/detail/${id}`} favorited={!!content?.favourite}>
        <Image src={url} alt={name} width='330' height='319' />
      </Overlay>

      <Info>
        <Breed href="/detail">
          {name}
        </Breed>
        <Heart favorited={!!content?.favourite} id={id} />
      </Info>

      <footer>
        <strong>Weight: <span>{weight}</span></strong>
        <strong>Lifespan: <span>{life_span}</span></strong>
        <strong>Origin: <span>{origin}</span></strong>
      </footer>
    </CardStyled>
  );
}

export default Card;