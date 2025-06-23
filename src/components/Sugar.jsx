import styled from 'styled-components'
import colors from '../utils/style/colors'
import { SectionContainer, CardContainer } from '../utils/style/SectionStyle'

function Sugar({ data, addToCart }) {
  const sugarArray = data.map((item) => {
    return (
      <SugarCard key={item.id} onClick={() => addToCart(item)}>
        <div className='item--price'>
          {Number.isInteger(item.price) ? item.price : item.price.toFixed(2)} €
        </div>
        <img
          src={`./images/${item.image}`}
          className='item--image'
          alt={`Icône de ${item.name}`}
        />
        <div className='item--name'>{item.name}</div>
      </SugarCard>
    )
  })

  return (
    <SugarContainer>
      <h1>Sucrés</h1>
      {sugarArray}
    </SugarContainer>
  )
}

export default Sugar

/////  Style  /////

const SugarContainer = styled(SectionContainer)`
  grid-template-columns: repeat(3, 1fr);
  border: 4px solid ${colors.sugarColor};
  flex: 3;

  h1 {
    color: ${colors.sugarColor};
  }
`

const SugarCard = styled(CardContainer)`
  background-color: ${colors.sugarColor}BF;
  border: 2px solid ${colors.sugarColor};
`
