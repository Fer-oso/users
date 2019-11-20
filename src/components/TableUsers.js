import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class TableUsers extends Component{
    render(){      
        return(
<div className="container mt-5">
    <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">User</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {Object.keys(this.props.users).map(user=>{
          const {email,id,name,phone,username}= this.props.users[user];
       return(
        <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
            <Link to={`/user/${id}`}>
            <button className="btn btn-success btn-sm">View</button>
            </Link>    
            <Link to = {`/edit/${id}`}>
            <button className="btn btn-info btn-sm">Edit</button>
            </Link>
            <button className="btn btn-danger btn-sm" onClick={()=>this.props.deleteUser(id)} type="button">Delete</button>
            </td>
      </tr>
      )
      }
      )}
   </tbody>
    </table>
</div>
        )
    }
}

export default TableUsers;