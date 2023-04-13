import { styled } from "@/styles";

export const DetailStyled = styled('div', {
  
  h2: {
    margin: '20px 0'
  },

  p: {
    lineHeight: '22px'
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
  gap: 50
});