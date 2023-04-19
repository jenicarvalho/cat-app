import { CatTypeDetail } from '@/types';
import Image from 'next/image';
import Heart from '../Heart';
import { CardStyled, Breed, Overlay, Info } from './styles';

type Props = {
  content: CatTypeDetail,
}

const Card = ({ content }: Props) => {

  const { url, breeds, id } = content;
  const { name, origin, life_span, weight } = breeds;

  const favorited = !!content?.favourite;

  return (
    <CardStyled>
      <Overlay href={`/detail/${id}?fav=${favorited}`} favorited={favorited}>
        <Image src={url} alt={name} width='330' height='319' />
      </Overlay>

      <Info>
        <Breed href="/detail">
          {name}
        </Breed>
        <Heart favorited={favorited} id={id} />
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