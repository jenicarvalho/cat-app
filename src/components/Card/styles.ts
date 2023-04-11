import { styled } from "@/styles";
import Link from "next/link"

export const CardStyled = styled('div', {
  backgroundColor: '$white',
  borderRadius: 12,
  color: '$darkGray',
  border: '1px solid #E6E7EB',
  boxShadow: '0px 10px 20px rgba(9, 0, 65, 0.05)',
  padding: 24,
  textDecoration: 'none',

  footer: {
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns: '1fr 1fr',
    lineHeight: '30px',    
    color: '$darkGray',

    span: {
      fontWeight: '400'
    }
  }
});

export const Breed = styled(Link, {
  textTransform: 'uppercase', 
  fontSize: '$lg',
  color: '$black',
  margin: '24px 0',
  textDecoration: 'none',
  fontWeight: 600,

  display: 'flex',
  justifyContent: 'space-between',

  '&:hover': {
    color: '$primary'
  }
});

export const Overlay = styled(Link, {
  position: 'relative',
  borderRadius: 20,
  overflow: 'hidden',

  img: {
    objectFit: 'cover'
  },

  variants: {
    favorited: {
      true: {
        '&::before': {
          content: '\\2665',
          position: 'absolute',
          backgroundColor: 'rgba(33, 33, 33, 0.5)',
          width: '100%',
          height: '99%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '$red',
          fontSize: '$xl'
        },               
      },
    },
  }
});

export const Info = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});