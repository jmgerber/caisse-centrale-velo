import data from './data.json'
import Salt from './components/Salt'
import Sugar from './components/Sugar'
import Drink from './components/Drink'
import Consigne from './components/Consigne'
import Basket from './components/Basket'
import { useState } from 'react'
import styled from 'styled-components'

function App() {
  const [cart, setCart] = useState([])
  const saltData = data.filter((data) => data.categorie === 'salés')
  const sugarData = data.filter((data) => data.categorie === 'sucrés')
  const drinkData = data.filter((data) => data.categorie === 'boisson')
  const consigneData = data.filter((data) => data.categorie === 'consigne')

  const addToCart = (item) => {
    const exist = cart.find((cartItem) => cartItem.id === item.id)
    if (exist) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (item) => {
    console.log('REMOVE', item)
    const exist = cart.find((cartItem) => cartItem.id === item.id)
    if (exist.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id))
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : cartItem
        )
      )
    }
  }

  return (
    <AppContainer>
      <section className='food-drink-container'>
        <Drink data={drinkData} addToCart={addToCart} />
        <Salt data={saltData} addToCart={addToCart} />
        <div className='sugar-consigne-container'>
          <Sugar data={sugarData} addToCart={addToCart} />
          <Consigne data={consigneData} addToCart={addToCart} />
        </div>
      </section>

      <section className='basket-container'>
        <Basket
          data={cart}
          setData={setCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </section>
    </AppContainer>
  )
}

export default App

/////  Style  /////

const AppContainer = styled.main`
  display: flex;
  padding: 40px;
  width: 100vw;
  height: 100vh;
  gap: 2vw;
  & .food-drink-container {
    display: flex;
    flex: 2;
    flex-direction: column;
    gap: 2vw;
  }

  & .sugar-consigne-container {
    display: flex;
    gap: 1vw;
  }

  & .basket-container {
    display: flex;
    flex: 1;
  }
`
