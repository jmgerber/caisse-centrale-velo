import { useEffect } from 'react'
import styled from 'styled-components'

function Change({
  total,
  givenMoney,
  setGivenMoney,
  returnMoney,
  setReturnMoney,
}) {
  useEffect(() => {
    setReturnMoney(givenMoney - total)
  }, [givenMoney, total])

  const handleGiveInput = (e) => setGivenMoney(e.target.value)
  const handleReturnInput = (e) => setReturnMoney(e.target.value)

  const addNumberInput = (number) => {
    givenMoney === ''
      ? setGivenMoney(number)
      : setGivenMoney(givenMoney + number)
  }

  return (
    <ChangeContainer>
      <div className='numpad'>
        <button onClick={() => addNumberInput('7')}>7</button>
        <button onClick={() => addNumberInput('8')}>8</button>
        <button onClick={() => addNumberInput('9')}>9</button>
        <button onClick={() => addNumberInput('4')}>4</button>
        <button onClick={() => addNumberInput('5')}>5</button>
        <button onClick={() => addNumberInput('6')}>6</button>
        <button onClick={() => addNumberInput('1')}>1</button>
        <button onClick={() => addNumberInput('2')}>2</button>
        <button onClick={() => addNumberInput('3')}>3</button>
        <button onClick={() => addNumberInput('0')}>0</button>
        <button onClick={() => addNumberInput('.')}>.</button>
        <button className='resetButton' onClick={() => setGivenMoney('')}>
          C
        </button>
      </div>
      <div className='numeric-fields'>
        <div className='inputContainer'>
          <label htmlFor='givenMoney' className='inputName'>
            Donne
          </label>
          <input
            type='text'
            id='givenMoney'
            name='givenMoney'
            onChange={handleGiveInput}
            value={givenMoney}
            disabled
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='returnMoney'>Rendre</label>
          <input
            type='text'
            id='returnMoney'
            name='returnMoney'
            onChange={handleReturnInput}
            value={
              typeof returnMoney === 'number'
                ? Number.isInteger(returnMoney)
                  ? returnMoney
                  : returnMoney.toFixed(2)
                : returnMoney
            }
            disabled
          />
        </div>
      </div>
    </ChangeContainer>
  )
}

export default Change

const ChangeContainer = styled.section`
  display: flex;
  background-color: #eee;
  border-radius: 12px;
  padding: 4px;
  width: 100%;
  height: 30%;
  align-items: center;
  & .numpad {
    display: grid;
    grid-template-columns: repeat(3, clamp(40px, 3.8vw, 56px));
    grid-template-rows: repeat(4, clamp(40px, 3.8vw, 56px));
    grid-gap: 0.4vw;
  }
  & button {
    cursor: pointer;
    border: 2px solid black;
    border-radius: 8px;
    font-size: 2vw;
    font-weight: 700;
    &:active {
      transform: scale(1.1);
      border-color: #bbb;
    }
    &.resetButton {
      background-color: #d84c4c;
      border-color: #d22e2e;
      color: #fff;
    }
  }
  & .numeric-fields {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100%;
    flex: 1;
    & .inputContainer {
      width: 70%;
    }
    & label {
      font-size: 1.6vw;
      font-weight: 500;
      padding-left: 4px;
    }
    & input {
      height: 3.6vw;
      padding: 0.3vw;
      width: 100%;
      border-radius: 8px;
      font-size: 1.8vw;
      font-weight: 600;
      margin-top: 4px;
      &:disabled {
        background-color: #fff;
        border: 2px solid black;
        color: #000;
      }
    }
  }
`
