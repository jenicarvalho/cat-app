import React from 'react';
import Image from 'next/image';
import { DetailStyled, Traits, Trait } from './styles';

const DetailInfo = () => {

  return (
    <DetailStyled>
      <Image src='https://cdn2.thecatapi.com/images/bte.jpg' alt='cat' width='324' height='319' />

      <h2>American Bobcat</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, in nam? Qui blanditiis recusandae maiores nesciunt deserunt asperiores. Quas inventore recusandae dolorum rem enim necessitatibus veritatis nam modi doloribus totam.</p>

      <Traits>
        <Trait>
          <div>Weight: <span>5k</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Origin: <span>Brazil</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Origin: <span>Brazil</span></div>
          <div>Lifespan: <span>20y</span></div>
        </Trait>
        <Trait>
          <div>Weight: <span>5k</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Origin: <span>Brazil</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Origin: <span>Brazil</span></div>
          <div>Lifespan: <span>20y</span></div>
        </Trait>
        <Trait>
          <div>Weight: <span>5k</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Origin: <span>Brazil</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Origin: <span>Brazil</span></div>
          <div>Lifespan: <span>20y</span></div>
        </Trait>
        <Trait>
          <div>Weight: <span>5k</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Origin: <span>Brazil</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Lifespan: <span>20y</span></div>
          <div>Origin: <span>Brazil</span></div>
          <div>Lifespan: <span>20y</span></div>
        </Trait>
      </Traits>

    </DetailStyled>
  );
}

export default DetailInfo;