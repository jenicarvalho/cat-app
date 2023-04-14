import { styled } from "@/styles";
import Link from "next/link";

export const DetailStyled = styled('section', {
  
  h2: {
    marginBottom: 20,
    fontSize: '$lg',
    color: '$primary',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center'
  },

  p: {
    lineHeight: '22px',
  },

  h3: {
    margin: '20px 0 10px'
  },

  h4: {
    margin: '20px 0',
    fontSize: '$lg',
    color: '$primary',
    textTransform: 'uppercase'
  },

  img: {
    objectFit: 'cover'
  }
});

export const Traits = styled('div', {
  margin: '20px 0'
});

export const Trait = styled('div', {
  display: 'flex',
  borderBottom: '1px solid $lightGray',
  lineHeight: '30px',
  padding: '10px 0',
  gap: 50,

  div: {
    fontWeight: 500
  }
});

export const Flex = styled('div', {
  display: 'flex',

  div: {
    marginLeft: 20
  }
});

export const LinkStyled = styled(Link, {
  display: 'block',
  marginBottom: '40px',
  textAlign: 'center',
  color: '#fff',
  textDecoration: 'none',

  span: {
    backgroundColor: '$primary',
    border: 'none',
    padding: '7px 20px',
    borderRadius: 12,
    color: '$white',
    fontSize: '$md',
    alignSelf: 'center',
    cursor: 'pointer',

    '&:hover': {
      filter: 'brightness(0.9)'
    },
  }
})