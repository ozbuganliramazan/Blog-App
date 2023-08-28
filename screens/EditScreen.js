import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default function EditScreen({route,navigation}) {
  const {state,editBlogPost} = useContext(Context);
 const blogPost = state.find((blogPost)=> blogPost.id === route.params.id)
 const id = route.params.id;
  return (
   <BlogPostForm 
   isEditable={true}  
   initialValues={{title:blogPost.title,content:blogPost.content}}  onsubmit={(title,content)=>{
    editBlogPost(id,title,content,()=>navigation.navigate('Index'));
  }}/>
  )
}

const styles = StyleSheet.create({})