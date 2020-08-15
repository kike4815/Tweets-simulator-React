import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import Addicon from '@material-ui/icons/Add'
import moment from 'moment'
import ModalContainer from '../ModalContainer'
import FormSendTweet from '../FormSendTweet/FormSendTweet'
import { TWEETS_STORAGE } from '../../utils/constants'

import './SendTweet.scss'

export default function SendTweet (props) {
    const { setToastProps } = props
    const [ isOpen, setIsOpen ] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    const sendTweet = (event, formValue) => {
        event.preventDefault()
        const { name, tweet } = formValue
        let AllTweets = []

        if (!name || !tweet) {
            setToastProps({
                open: true,
                text: 'Rellena todos los campos',
                severity: 'error'
            })
        } else {
            formValue.time = moment()
            AllTweets.push(formValue)
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(AllTweets))
            console.log('enviado :)')
            setToastProps({
                open: true,
                text: 'Tweet enviado correctamente',
                severity: 'success'
            })
            closeModal()
        }
    }

    return (
        <div className="send-tweet">
            <Fab className="send-tweet__open-modal" aria-label="add" color="primary" onClick={openModal}>
                <Addicon />
            </Fab>
            <ModalContainer isOpen={isOpen} isClose={closeModal}>
                <FormSendTweet sendTweet={sendTweet} />
            </ModalContainer>
        </div>
    )
}
