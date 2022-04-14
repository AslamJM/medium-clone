import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Header from '../../components/Header'
import { sanityClient,urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'
import CommentForm from '../../components/CommentForm'
import Comments from '../../components/Comments'


interface Props{
    post:Post
}



const PageFromSlug = ({post}:Props) => {
     
  return (
    <main>
        <Header/>
        <img className='h-40 w-full object-cover' src={urlFor(post.mainImage).url()!} alt={post.title} />
        <article className='max-w-3xl mx-auto'>
            <h1 className='my-3 text-xl font-bold uppercase'>{post.title}</h1>
            <h2 className='text-gray-500 mb-2'>{post.description}</h2>
            <div className='flex align-middle space-x-2'>
                <img src={urlFor(post.author.image).url()!} alt="author" className='h-8 w-8 object-cover rounded-full' />
                <p className='font-extralight text-sm'>article by <span className='text-green-600'>{post.author.name}</span> published at {new Date(post._createdAt).toLocaleString()}</p>
            </div>
            <div>
                <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={post.body}
                serializers={{
                    h1:(props:any)=><h1 className='text-2xl font-bold my-5' {...props}/>,
                    h2:(props:any)=><h2 className='text-xl font-bold my-5' {...props}/>,
                    li:({children}:any)=><li className='ml-4 list-disc'>{children}</li>,
                    a:({href,children}:any)=><a href={href} className="text-blue-500 hover:underline">{children}</a>
                }}
                />
            </div>
        </article>
        <hr className='max-w-lg my-5 mx-auto border border-yellow-500'/>
       <CommentForm id={post._id}/>
       <Comments comments={post.comments}/>
    </main>
  )
}

export default PageFromSlug

export const getStaticPaths=async()=>{
    const query = `*[_type == "post"]{
  _id,
  slug,
}`
const posts = await sanityClient.fetch(query)
const paths = posts.map((post:Post)=>(
    {params:{
        slug:post.slug.current
    }}
))
return{
    paths,
    fallback:"blocking"
}
}

export const getStaticProps:GetStaticProps =async({params})=>{
    const query = `*[_type == "post" && slug.current==$slug][0]{
  _id,
  slug,
  _createdAt,
  title,
  body,
  description,
  mainImage,
  author->{
  name,
  image
},
 "comments":*[_type=="comment" &&post._ref==^._id &&approved==true]
}`
const post = await sanityClient.fetch(query,{slug:params?.slug})

if(!post){
    return{
        notFound:true
    }
}
return {
    props:{
        post,
    }
}
}