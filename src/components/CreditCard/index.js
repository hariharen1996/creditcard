// Write your code here
import {useState} from 'react'
import {
  CreditContainer,
  PaymentContainer,
  CreditHeading,
  CreditCardContainer,
  PaymentCard,
  PaymentHeading,
  Input,
  HolderNumber,
  HolderName,
  Container,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const changeNumber = event => {
    setNumber(event.target.value)
  }

  const changeName = event => {
    setName(event.target.value)
  }

  return (
    <Container>
      <CreditContainer>
        <CreditHeading>CREDIT CARD</CreditHeading>
        <CreditCardContainer data-testid="creditCard">
          <HolderNumber>{number}</HolderNumber>
          <HolderName>CARDHOLDER NAME</HolderName>
          <HolderName>{name}</HolderName>
        </CreditCardContainer>
      </CreditContainer>
      <PaymentContainer>
        <PaymentCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={number}
            onChange={changeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={changeName}
          />
        </PaymentCard>
      </PaymentContainer>
    </Container>
  )
}

export default CreditCard
