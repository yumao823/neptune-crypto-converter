import React, { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './styles.scss'

const WalletConnect: FC<{show:boolean, onConnect:() => void, onClose:() => void}> = ({ show, onConnect, onClose }) => (
  <Modal className="connect" size="sm" centered show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Wallet Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>Wallet not connected! Please click "Connect Now" button below.</Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={onConnect}>
        Connect Now
      </Button>
      <Button variant="light" onClick={onClose}>
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
)

export default WalletConnect