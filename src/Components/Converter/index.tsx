import React, { FC, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './styles.scss'

const Converter: FC = () => {
  const [nep, setNep] = useState<number>()
  const [busd, setBusd] = useState<number>()
  const [controller, setController] = useState<string>()

  const handleNEP = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let temp: number = parseFloat(e.target.value)
      setNep(temp)
      setBusd(temp * 3)
      setController('nep')
  }

  const handleBUSD = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let temp: number = parseFloat(e.target.value)
    setBusd(temp)
    setNep(temp / 3)
    setController('busd')
  }

  return (
    <div className="converter">
      <p className="title">Crypto Converter</p>
      <Form className="d-flex flex-column">
        <Form.Group className="mb-1">
          <Form.Label>NEP</Form.Label>
          <Form.Control
            value={controller === 'nep' ? nep : nep?.toFixed(2)}
            type="number"
            onChange={handleNEP}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>BUSD</Form.Label>
          <Form.Control
            value={controller === 'busd' ? busd : busd?.toFixed(2)}
            type="number"
            onChange={handleBUSD}
          />
        </Form.Group>
        <Button variant="outline-primary" className="ms-auto me-auto">Check Wallet Details</Button>
      </Form>
    </div>
  )
}

export default Converter