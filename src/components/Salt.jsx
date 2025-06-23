import styled from 'styled-components'
import colors from '../utils/style/colors'
import { SectionContainer, CardContainer } from '../utils/style/SectionStyle'

function Salt({ data, addToCart }) {
  const saltArray = data.map((item) => {
    return (
      <SaltCard key={item.id} onClick={() => addToCart(item)}>
        <div className='item--price'>
          {Number.isInteger(item.price) ? item.price : item.price.toFixed(2)} €
        </div>
        <img
          src={`./images/${item.image}`}
          className='item--image'
          alt={`Icône de ${item.name}`}
        />
        <div className='item--name'>{item.name}</div>
      </SaltCard>
    )
  })
  return (
    <SaltContainer>
      <h1>Salés</h1>
      {saltArray}
    </SaltContainer>
  )
}

export default Salt

/////  Style  /////

const SaltContainer = styled(SectionContainer)`
  grid-template-columns: repeat(3, 1fr);
  border: 4px solid ${colors.saltColor};

  h1 {
    color: ${colors.saltColor};
  }
`

const SaltCard = styled(CardContainer)`
  background-color: ${colors.saltColor}BF;
  border: 2px solid ${colors.saltColor};
`
