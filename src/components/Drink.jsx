import styled from 'styled-components'
import colors from '../utils/style/colors'
import { SectionContainer, CardContainer } from '../utils/style/SectionStyle'

function Drink({ data, addToCart }) {
  const drinkArray = data.map((item) => {
    return (
      <DrinkCard key={item.id} onClick={() => addToCart(item)}>
        <div className='item--price'>
          {Number.isInteger(item.price) ? item.price : item.price.toFixed(2)}€
        </div>
        <img
          src={`./images/${item.image}`}
          className='item--image'
          alt={`Icône de ${item.name}`}
        />
        <div className='item--name'>{item.name}</div>
      </DrinkCard>
    )
  })

  return (
    <DrinkContainer>
      <h1>Boissons</h1>
      {drinkArray}
    </DrinkContainer>
  )
}

export default Drink

/////  Style  /////

const DrinkContainer = styled(SectionContainer)`
  grid-template-columns: repeat(4, 1fr);
  border: 4px solid ${colors.drinkColor};

  h1 {
    color: ${colors.drinkColor};
  }
`

const DrinkCard = styled(CardContainer)`
  background-color: ${colors.drinkColor}BF;
  border: 2px solid ${colors.drinkColor};
`
