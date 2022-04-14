import React,{useState} from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'

interface IformInput{
    _id:string,
    name:string,
    email:string,
    comment:string
}
type Props={
    id:string
}

const CommentForm = ({id}:Props) => {

    const [submitted,setSubmitted]=useState(false)

    const {register,handleSubmit,formState:{errors}} = useForm<IformInput>()

    const onSubmit:SubmitHandler<IformInput>=(data)=>{
         fetch('/api/createComment',{
            method:'POST',
            body:JSON.stringify(data),
        }).then(data=>{
            setSubmitted(true)
            console.log(data)}
        ).catch(err=>{
            setSubmitted(false)
            console.log(err)}
        )
        
    }

  return (
 submitted?(
     <div className='max-w-2xl py-5 text-white flex flex-col bg-yellow-500 mx-auto px-10'>
         <h3 className='text-3xl font-bold'>Thanks for commenting</h3>
         <p>your comment will appear after approval</p>
     </div>
 ):(
         <form className='flex flex-col p-5 mx-auto max-w-2xl' onSubmit={handleSubmit(onSubmit)}>
            <h4 className='text-3xl font-bold mb-3'>Leave a Comment</h4>
            <input type="hidden" value={id} {...register("_id")} />
            <label className='block mb-5'>
                <span className='text-gray-700 '>Name</span>
                <input type="text" placeholder='enter name' className='py-2 px-3 shadow border rounded form-input mt-1 block w-full ring-yellow-500 focus:ring outline-none' {...register("name")} />
            </label>
            {
                errors.name&&<h3>enter name</h3>
            }
            <label className='block mb-5'>
                <span className='text-gray-700 '>Email</span>
                <input type="text" placeholder='enter email'className='py-2 px-3 shadow border rounded form-input mt-1 block w-full ring-yellow-500 focus:ring outline-none' {...register("email")}  />
            </label>
            <label className='block mb-5'>
                <span className='text-gray-700 '>Comment</span>
                <textarea  rows={8} className='py-2 px-3 shadow border rounded form-textarea mt-1 block w-full ring-yellow-500 focus:ring outline-none' {...register("comment")}/>
            </label>
            <input type="submit" className='bg-yellow-500 hover:bg-yellow-400 mt-2 py-2 focus:shadow text-white font-bold rounded cursor-pointer'/>
        </form>
 )
  )
}

export default CommentForm