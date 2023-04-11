import { styled } from "@/styles";

export const CardStyled = styled('div', {
  backgroundColor: '$white',
  borderRadius: 12,
  color: '$darkGray',
  border: '1px solid #E6E7EB',
  boxShadow: '0px 10px 20px rgba(9, 0, 65, 0.05)',
  padding: 24,

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '$darkGray',

    span: {
      fontWeight: '400'
    }
  }
});

export const Breed = styled('h2', {
  textTransform: 'uppercase',
  fontSize: '$lg',
  color: '$black',
  margin: '24px 0'
});