import _ from 'lodash'
import jsonPlaceholder from '../api/jsonPlaceholder'
export const fetchPosts=()=>{
   return async function(dispatch){
       const response = await jsonPlaceholder.get('posts')
       console.log(response.data.userId)
       dispatch({type:'FETCH_POSTS',payload:response.data})
   }
}
// export const fetchUser=(id)=>{
//     return async function(dispatch){
//         const response=await jsonPlaceholder.get(`users/${id}`)
//         console.log(response.data)
//         dispatch({type:'FETCH_USER',payload:response.data})
//     }
// }
// export const fetchUser=(id)=>dispatch=>
//  _fetchUser(id,dispatch)

// const _fetchUser =_.memoize(async(id,dispatch)=>{
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//     dispatch({type:'FETCH_USER',payload:response.data})
// })
export const fetchUser= id=> async dispatch=>{
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({type:'FETCH_USER', payload:response.data})
}
// export const fetchUser =function(id){
//     return _.memoize(async function(dispatch){
//         const response = await jsonPlaceholder.get(`/users/${id}`)
//       dispatch({type:'FETCH_USER',payload:response.data})
//     })
// }
export const fetchPostsAndUsers = ()=> async (dispatch,getState)=>{
   await dispatch(fetchPosts()) 
   console.log('fetched psts')
//    const userIds = _.uniq(_.map(getState().posts,'userId'));
//    userIds.forEach(id=>dispatch(fetchUser(id)))
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id=>dispatch(fetchUser(id)))
    .value()

}