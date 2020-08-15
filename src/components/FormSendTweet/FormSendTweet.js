import React, { useState } from 'react'
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'

import './FormSendTweet.scss'

export default function FormSendTweet ({ sendTweet }) {
    const [ formvalue, setFormvalue ] = useState({
        name: '',
        tweet: ''
    })

    const formOnchange = (event) => {
        setFormvalue({
            ...formvalue,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="form-send-tweet">
            <h2 className="form-send-tweet__title">Enviat Tweet</h2>
            <form
                className="form-send-tweet__form"
                onSubmit={(event) => sendTweet(event, formvalue)}
                onChange={formOnchange}
            >
                <FormControl>
                    <FormGroup>
                        <TextField
                            className="form-send-tweet__form-name"
                            name="name"
                            type="text"
                            placeholder="Nombre usuario"
                            margin="normal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            className="form-send-tweet__form-textarea"
                            name="tweet"
                            multiline
                            rows="6"
                            placeholder="Escriba su tweet"
                            margin="normal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Enviar tweet</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}
