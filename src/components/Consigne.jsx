import styled from 'styled-components'
import colors from '../utils/style/colors'
import { CardContainer } from '../utils/style/SectionStyle'

function Consigne({ data, addToCart }) {
  const consigneArray = data.map((item) => {
    return (
      <ConsigneCard key={item.id} onClick={() => addToCart(item)}>
        <div className='item--price'>{item.price} €</div>
        <img
          src={`./images/${item.image}`}
          className='item--image'
          alt={`Icône de ${item.name}`}
        />
        <div className='item--name'>{item.name}</div>
      </ConsigneCard>
    )
  })
  return consigneArray
}

export default Consigne

const ConsigneCard = styled(CardContainer)`
  background-color: ${colors.consigneColor}BF;
  border: 2px solid ${colors.consigneColor};
  flex: 1;
  height: auto;
`
