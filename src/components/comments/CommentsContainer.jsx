import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getCommentsData } from '../../data/comment'

const CommentsContainer = ({ className }) => {
    const [comments, setComments] = useState([])

    console.log(comments)

    useEffect(() => {
        (async () => {
            const commentData = await getCommentsData()
            setComments(commentData)
        })()
    }, [])

    const addCommentHandler = (value, parent = null, replyOnUser = null) => {
        const newComment = {
            id: "10",
            user: {
            _id: "a",
            name: "Mohammad Rezaii",
            },
            desc: value,
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        }
        setComments((curState) => {
            return [newComment, ...curState]
        })
    }

  return (
    <div className={`${className}`}>
        <CommentForm btnLabel='Send' formSubmitHandler={(value) => addCommentHandler(value)} />
    </div>
  )
}

export default CommentsContainer