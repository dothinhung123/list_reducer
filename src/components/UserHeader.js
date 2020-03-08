// import React from 'react';
// import {connect} from 'react-redux';
// import {fetchUser} from '../actions'
// class UserHeader extends React.Component{
//     componentDidMount(){
//     this.props.fetchUser(this.props.userId)
//     }
//     render(){
//         console.log(this.props.users)
//         const user = this.props.users.find(user=>user.id===this.props.userId)
//         if(!user){
//             return null
//         }
//         return <div>{user.name}</div>
      
//     }
// }
// const mapStateToProps =(state)=>{
//     return {users:state.users}
// }
// export default connect(mapStateToProps,{fetchUser})(UserHeader)
import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions'
class UserHeader extends React.Component{
    componentDidMount(){
    this.props.fetchUser(this.props.userId)
    }
    render(){
        const {users}= this.props
        if(!users){
            return null
        }
        return <div>{users.name}</div>
      
    }
}
const mapStateToProps =(state,ownProps)=>{
   
    return {users:state.users.find(user=>user.id=== ownProps.userId)}
}
export default connect(mapStateToProps,{fetchUser})(UserHeader)