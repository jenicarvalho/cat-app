import { styled } from "@/styles";

const Container = styled('section', {
  gap: 28,
  maxWidth: 1200,
  margin: '50px auto',

  variants: {
    grid: {
      true: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr'
      }
    },
    plain: {
      true: {
        display: 'flex',
        backgroundColor: '$white',
        borderRadius: 12,
        border: '1px solid #E6E7EB',
        boxShadow: '0px 10px 20px rgba(9, 0, 65, 0.05)',  
        padding: 24,        
        gap: 0
      }
    }
  }

});

export default Container;
