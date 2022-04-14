import type { NextPage } from 'next'
import Header from '../components/Header'
import Banner from '../components/Banner'
import PostsBody from '../components/PostsBody'
import { sanityClient,urlFor } from '../sanity'
import { Post } from '../typings'

interface Props{
  posts:Post[]
}

const Home: NextPage<Props> = ({posts}) => {

  return (
    <div className='max-w-7xl mx-auto'>
      <Header/>
      <Banner/>
      <PostsBody posts={posts}/>
    </div>
  )
}

export default Home

export const getServerSideProps=async()=>{
  const query=`*[_type == "post"]{
  _id,
  title,
  slug,
  author -> {
  name,
  image
},
description,
mainImage
}`
const posts = await sanityClient.fetch(query)

return{
  props:{posts}
}


};
