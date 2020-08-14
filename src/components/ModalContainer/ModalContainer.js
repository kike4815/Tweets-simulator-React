import React from 'react'
import { Modal } from '@material-ui/core'
import './ModalContainer.scss'

export default function ModalContainer ({ isOpen, isClose, children }) {
    /* const { isOpen, isClose, children } = props */
    return (
        <Modal className="modal-container" open={isOpen} onClose={isClose} closeAfterTransition>
            <div>{children}</div>
        </Modal>
    )
}
