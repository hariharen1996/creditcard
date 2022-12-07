// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const CreditContainer = styled.div`
  background-color: #3b4b69;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PaymentContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CreditHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  border-bottom: 1px solid #ffd773;
`
export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 350px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`
export const PaymentCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(7, 7, 7, 0.9);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const PaymentHeading = styled.h1`
  color: #344e7a;
  font-family: 'Roboto';
  font-size: 16px;
`
export const Input = styled.input`
  border: 1px solid #c3cad9;
`
export const HolderNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`
export const HolderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`
