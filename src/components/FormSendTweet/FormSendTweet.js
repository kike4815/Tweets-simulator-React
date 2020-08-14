import React from 'react'
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'

import './FormSendTweet.scss'

export default function FormSendTweet () {
    return (
        <div className="form-send-tweet">
            <h2 className="form-send-tweet__title">Enviat Tweet</h2>
            <form className="form-send-tweet__form">
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
            </form>
        </div>
    )
}
