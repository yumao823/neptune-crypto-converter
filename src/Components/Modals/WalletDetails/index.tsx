import React, { FC } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import './styles.scss'

const WalletDetails: FC<{show:boolean, onClose:() => void}> = ({ show, onClose }) => {
  const { account, deactivate, chainId } = useEthers()
  const etherBalance = useEtherBalance(account)

  const handleDisconnect = (): void => {
    deactivate()
    onClose()
  }

  return (
    <Modal className="details" size="sm" centered show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Wallet Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account</td>
              <td className="account">{account}</td>
            </tr>
            <tr>
              <td>Chain Id</td>
              <td>{chainId}</td>
            </tr>
            <tr>
              <td>Balance</td>
              <td>{etherBalance && formatEther(etherBalance)}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDisconnect}>Disconnect</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default WalletDetails