import React, { useState } from 'react'
import { Container, Snackbar } from '@material-ui/core'
import Header from './components/Header'
import SendTweet from './components/SendTweet'
import MuiAlert from '@material-ui/lab/Alert'

function App () {
    const [ toastProps, setToastProps ] = useState({
        open: false,
        text: null,
        severity: null
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setToastProps({
            open: false,
            text: null
        })
    }
    //FUNCTION TO POP WITH COLOR THE ALERT
    function Alert (props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />
    }

    return (
        <Container className="tweets-simulator" maxWidth={false}>
            <Header />
            <SendTweet setToastProps={setToastProps} />
            <Snackbar
                open={toastProps.open}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                autoHideDuration={2000}
                // message={<span id="message-id">{toastProps.text}</span>}
                onClose={handleClose}
            >
                <Alert severity={toastProps.severity}>{toastProps.text}</Alert>
            </Snackbar>
        </Container>
    )
}

export default App
