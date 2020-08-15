import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import moment from 'moment'
import DeleteTwoTone from '@material-ui/icons/DeleteTwoTone'

import './Tweet.scss'

export default function Tweet (props) {
    const { tweet: { name, tweet, time }, index, deleteTweet } = props
    return (
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h5>{name}</h5>
                    <DeleteTwoTone onClick={() => deleteTweet(index)} />
                </div>
                <p>{tweet}</p>
                <div className="tweet__date">{moment(time).format('DD/MM/YY  HH:mm')}</div>
            </CardContent>
        </Card>
    )
}
