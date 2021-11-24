import React, { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useEthers } from '@usedapp/core'

const WalletDetails: FC<{show:boolean, onClose:() => void}> = ({ show, onClose }) => {
  const { deactivate } = useEthers()
  const handleDisconnect = (): void => {
    deactivate()
    onClose()
  }

  return (
    <Modal size="sm" centered show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Wallet Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>Here are Details</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDisconnect}>Disconnect</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default WalletDetails