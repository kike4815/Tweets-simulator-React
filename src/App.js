import React, { useState, useEffect } from 'react'
import { Container, Snackbar } from '@material-ui/core'
import Header from './components/Header'
import SendTweet from './components/SendTweet'
import MuiAlert from '@material-ui/lab/Alert'
import { TWEETS_STORAGE } from './utils/constants'
import ListTweets from './components/ListTweets/ListTweets'

function App () {
    const [ toastProps, setToastProps ] = useState({
        open: false,
        text: null,
        severity: null
    })

    const [ allTweets, setAllTweets ] = useState([])
    const [ reload, setReload ] = useState(false)

    useEffect(
        () => {
            const alltweetsStorage = localStorage.getItem(TWEETS_STORAGE)
            const alltweetsArray = JSON.parse(alltweetsStorage)
            setAllTweets(alltweetsArray)
            setReload(false)
        },
        [ reload ]
    )

    const deleteTweet = (index) => {
        allTweets.splice(index, 1)
        setAllTweets(allTweets)
        localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets))
        setReload(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setToastProps({
            open: false,
            text: null
        })
    }
    //FUNCTION TO POP WITH COLOUR THE ALERT
    function Alert (props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />
    }

    return (
        <Container className="tweets-simulator" maxWidth={false}>
            <Header />
            <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
            <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
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
