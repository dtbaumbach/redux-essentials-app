import React from 'react'
import { useState } from 'react'
import { postAdded } from './postsSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )

            setTitle('')
            setContent('')
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type='text'
                    id = 'postTitle'
                    name= 'postTile'
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postContent'>Content</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked}>
                    Save Post
                </button>
            </form>
        </section>
  )
}