import React from 'react'
import {Comment} from '../typings'

interface Props{
    comments:Comment[]
}

const Comments = ({comments}:Props) => {
  return (
    <div className='max-w-2xl mx-auto py-10 flex flex-col'>
        <h3 className='text-3xl'>Comments</h3>
        <hr />
        {
            comments?.map(comment=><div key={comment._id}>
                <p><span className='text-green-500'>{comment.name}</span>: {comment.comment}</p>
            </div>)
        }
    </div>
  )
}

export default Comments