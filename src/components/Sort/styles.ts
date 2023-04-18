import { styled } from "@/styles";

export const SortStyled = styled('div', {
  borderLeft: '1px solid $lightGray',
  paddingLeft: 30,

  display: 'flex',
  flexDirection: 'column',
  
  label: {
    fontSize: '$small',
    color: '$primary',
    marginBottom: 5,
  },
  
  select: {
    fontSize: '$md',
    borderRadius: 12,
    padding: 1,
    textAlign: 'center',
    border: '1px solid $primary',
    cursor: 'pointer'
  },  
});