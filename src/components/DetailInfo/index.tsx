import React from 'react';
import Image from 'next/image';
import { DetailStyled, Traits, Trait, Flex, LinkStyled } from './styles';

const DetailInfo = ({ content }) => {

  const { url, breeds, id } = content;

  return (
    <DetailStyled>
      <LinkStyled href="/">
        <span>Back To Home</span>
      </LinkStyled>
      <Flex>
        <Image src={url} alt={breeds.name} width='330' height='319' />

        <div>
          <h2>{breeds.name}</h2>
          <p>{breeds.description}</p>

          <h3>Temperament</h3>
          <p>{breeds.temperament}</p>
        </div>
      </Flex>


      <Traits>
        <h4>Traits</h4>
        <Trait>
          <div>Weight: <span>{breeds.weight}</span></div>
          <div>Lifespan: <span>{breeds.life_span}</span></div>
          <div>Origin: <span>{breeds.origin}</span></div>
          <div>Adaptability: <span>{breeds.adaptability}</span></div>
          <div>Affection Level: <span>{breeds.affection_level}</span></div>
        </Trait>
        <Trait>
          <div>Intelligence: <span>{breeds.intelligence}</span></div>
          <div>Child Friendly: <span>{breeds.child_friendly}</span></div>
          <div>Dog Friendly: <span>{breeds.dog_friendly}</span></div>
          <div>Energy Level: <span>{breeds.energy_level}</span></div>
          <div>Health Issues: <span>{breeds.health_issues}</span></div>
        </Trait>
        <Trait>
          <div>Social Needs: <span>{breeds.social_needs}</span></div>
          <div>Stranger Friendly: <span>{breeds.stranger_friendly}</span></div>
          <div>Vocalisation: <span>{breeds.vocalisation}</span></div>
          <div>Alternative Names: <span>{breeds.alt_names}</span></div>
        </Trait>
        <Trait>
          <div>Know more here in <span> <a href={breeds.wikipedia_url} target="_blank">wikipedia</a> </span></div>
        </Trait>
      </Traits>

    </DetailStyled>
  );
}

export default DetailInfo;