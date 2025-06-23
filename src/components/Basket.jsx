import styled from 'styled-components'
import colors from '../utils/style/colors'
import { SectionContainer } from '../utils/style/SectionStyle'
import { useState } from 'react'
import Change from './Change'

function Basket({ data, setData, addToCart, removeFromCart }) {
  const [givenMoney, setGivenMoney] = useState('')
  const [returnMoney, setReturnMoney] = useState('')

  const basketArray = data.map((item) => {
    return (
      <BasketLine key={item.id}>
        <div className='leftSection'>
          <div className='imageContainer'>
            <img
              src={`./images/${item.image}`}
              className='item--image'
              alt={`Icône de ${item.name}`}
            />
          </div>
          <div className='item--quantity'>{item.quantity} X</div>
          <div className='item--name'>{item.name}</div>
        </div>
        <div className='rightSection'>
          <div className='item--price'>{`${(item.price * item.quantity).toFixed(
            2
          )}€`}</div>
          <button onClick={() => addToCart(item)}>+</button>
          <button onClick={() => removeFromCart(item)}>-</button>
        </div>
      </BasketLine>
    )
  })

  const totalPrice = data.reduce(
    (acc, currentValue) => acc + currentValue.price * currentValue.quantity,
    0
  )

  const resetBasket = () => {
    setGivenMoney('')
    setData([])
  }

  return (
    <BasketChangeContainer>
      <BasketContainer>
        <h1>Addition</h1>
        <div className='totalPrice'>
          <span className='totalPrice--text'>Total : </span>
          <span className='totalPrice--price'>{totalPrice.toFixed(2)}€</span>
        </div>
        <div className='basketList'>{basketArray}</div>
      </BasketContainer>
      <div className='buttonContainer'>
        <button onClick={() => resetBasket()} className='cancelButton'>
          Annuler
        </button>
        <button onClick={() => resetBasket()} className='payButton'>
          Payer
        </button>
      </div>
      <Change
        total={totalPrice}
        givenMoney={givenMoney}
        setGivenMoney={setGivenMoney}
        returnMoney={returnMoney}
        setReturnMoney={setReturnMoney}
      />
    </BasketChangeContainer>
  )
}

export default Basket

/////  Style  /////

const BasketChangeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & .buttonContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    button {
      cursor: pointer;
      height: clamp(40px, 3.6vw, 56px);
      width: 12vw;
      font-size: 1.5vw;
      font-weight: 600;
      border-radius: 4px;
      border: 2px solid;

      &.cancelButton {
        background-color: #d84c4c;
        border-color: #d22e2e;
        color: #fff;
      }
      &.payButton {
        background-color: #5ca134;
        border-color: #3d8620;
        color: #fff;
      }
      &:active {
        transform: scale(1.04);
        border-color: #333;
      }
    }
  }
`

const BasketContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  column-gap: inherit;
  border: 4px solid ${colors.basketColor};
  height: 60%;
  width: 100%;
  padding: 0.8vw;
  & h1 {
    color: ${colors.basketColor};
  }
  & .totalPrice {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -0.4vw;
    left: clamp(20%, 8vw, 24%);
    background-color: #ffffff;
    padding-inline: 0.6vw;
    line-height: 2.2vw;
    &--text {
      font-weight: 400;
      font-size: 2.2vw;
      margin-right: 0.5vw;
    }
    &--price {
      font-weight: 700;
      font-size: 2.3vw;
    }
  }
  & .basketList {
    height: 100%;
    overflow: hidden;
  }
`

const BasketLine = styled.div`
  display: flex;
  height: 42px;
  justify-content: space-between;
  width: 100%;
  & .leftSection,
  .rightSection {
    display: flex;
    align-items: center;
  }
  & .imageContainer {
    width: clamp(32px, 2vw, 42px);
    height: clamp(32px, 2vw, 42px);
    margin-right: 0.5vw;
  }
  & .item--image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #e7e7e7;
    border-radius: 50%;
    border: 2px solid #a0a0a0;
    padding: 2px;
  }
  & .item--quantity {
    font-weight: 700;
    font-size: 1.2vw;
    margin-right: 0.5vw;
    white-space: nowrap;
  }
  & .item--name {
    font-size: 1vw;
  }
  & .item--price {
    font-weight: 700;
    font-size: 1.2vw;
    margin-inline: 0.6vw;
  }
  & button {
    cursor: pointer;
    background-color: #d9d9d9;
    font-size: 1.2vw;
    font-weight: 700;
    width: min(42px, 2vw);
    height: min(42px, 2vw);
    border: none;
    border-radius: 8px;
    &:nth-child(2) {
      margin-right: 0.6vw;
    }
    &:active {
      transform: scale(1.05);
    }
  }
`
