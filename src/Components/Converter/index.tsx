import React, { FC, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './styles.scss'

const Converter: FC = () => {
  const [nep, setNep] = useState<number>(0)
  const [busd, setBusd] = useState<number>(0)

  const handleNEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNep(Number(e.target.value))
    setBusd(Number(e.target.value) * 3)
  }

  const handleBUSD = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusd(Number(e.target.value))
    setNep(Number(e.target.value) / 3)
  }

  return (
    <div className="converter">
      <p className="title">Crypto Converter</p>
      <Form className="d-flex flex-column">
        <Form.Group className="mb-1">
          <Form.Label>NEP</Form.Label>
          <Form.Control value={nep} type="number" onChange={handleNEP} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>BUSD</Form.Label>
          <Form.Control value={busd} type="number" onChange={handleBUSD} />
        </Form.Group>
        <Button variant="outline-primary" className="ms-auto me-auto">Check Wallet Details</Button>
      </Form>
    </div>
  )
}

export default Converter