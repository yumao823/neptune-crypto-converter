import React, { FC, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useEthers } from '@usedapp/core'
import { WalletConnect, WalletDetails } from '../Modals'
import './styles.scss'

const Converter: FC = () => {
  const [nep, setNep] = useState<number>()
  const [busd, setBusd] = useState<number>()
  const [connect, setConnect] = useState<boolean>(false)
  const [detail, setDetail] = useState<boolean>(false)
  const [controller, setController] = useState<string>()

  const { account, activateBrowserWallet } = useEthers()

  const handleNEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    let temp: number = parseFloat(e.target.value)
    setController('nep')
      setNep(temp)
      setBusd(temp * 3)
  }

  const handleBUSD = (e: React.ChangeEvent<HTMLInputElement>) => {
    let temp: number = parseFloat(e.target.value)
    setController('busd')
    setBusd(temp)
    setNep(temp / 3)
  }

  const handleConnect = () => {
    activateBrowserWallet()
    setConnect(false)
    setDetail(true)
  }

  const handleDetails = () => {
    if (!account) setConnect(true)
    else setDetail(true)
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
        <Button
          className="ms-auto me-auto"
          variant="outline-primary"
          onClick={handleDetails}
        >
          Check Wallet Details
        </Button>
      </Form>

      <WalletConnect
        show={connect}
        onConnect={handleConnect}
        onClose={() => setConnect(false)}
      />
      <WalletDetails show={detail} onClose={() => setDetail(false)} />
    </div>
  )
}

export default Converter