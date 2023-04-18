import { styled } from "@/styles";

export const FilterStyled = styled('div', {
  display: 'flex',
  gap: 15,
  marginRight: 30,

  button: {
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
    }
  }

});

export const Item = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  
  label: {
    fontSize: '$small',
    color: '$primary',
    marginBottom: 5
  },

  select: {
    fontSize: '$md',
    borderRadius: 12,
    padding: 1,
    textAlign: 'center',
    border: '1px solid $primary',
    minWidth: 180
  },

  'input[type=checkbox]': {
    width: '15px', 
    height: '15px', 
    margin: '0 auto', 
    accentColor: 'var(--colors-primary)'
  }
});