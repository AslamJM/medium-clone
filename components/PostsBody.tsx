import Link from 'next/link'
import React from 'react'
import { Post } from '../typings'
import {urlFor} from '../sanity'

interface Props{
    posts:Post[]
}

const PostsBody:React.FC<Props> = ({posts}) => {
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 d:gap-6 p-2 lg:p-3'>
        {
            posts.map(post=><Link href={`/posts/${post.slug.current}`} key={post._id}>
                <div className='group cursor-pointer border rounded-lg overflow-hidden'>                   
                    <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} alt={post.title} />
               <div className='flex align-middle justify-between px-4 py-3 bg-white'>                    
                <div>
                    <p className='text-lg font-bold'>{post.title}</p>
                    <p className='text-xs'>{post.description} by {post.author.name}</p>
                </div>
                    <img src={urlFor(post.author.image).url()!} alt={post.author.name} className="h-12 w-12 rounded-full" />
               </div>
                </div>
            </Link>)
        }
    </div>
  )
}

export default PostsBody