import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import Addicon from '@material-ui/icons/Add'
import moment from 'moment'
import ModalContainer from '../ModalContainer'
import FormSendTweet from '../FormSendTweet/FormSendTweet'

import './SendTweet.scss'

export default function SendTweet () {
    const [ isOpen, setIsOpen ] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className="send-tweet">
            <Fab className="send-tweet__open-modal" aria-label="add" color="primary" onClick={openModal}>
                <Addicon />
            </Fab>
            <ModalContainer isOpen={isOpen} isClose={closeModal}>
                <FormSendTweet />
            </ModalContainer>
        </div>
    )
}
