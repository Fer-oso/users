import React,{Component} from 'react';
class EditUser extends Component{

    state={
        user:{
           ...this.props.user
        }
    }
   readData = (e) => {
       this.setState({ 
           user:{ 
            ...this.state.user,
            [e.target.name] : e.target.value,
            id:this.props.user.id                     
   }})}

   submitData = (e) =>{
       e.preventDefault();
this.props.editUser(this.state.user)
       
   }
   
   chargeForm = () =>{
       if(!this.props.user) return null;
       const {name,username,phone,email,password} = this.props.user;
       return(
        <div className="container">
        <h2 className="text-center mt-3">Edit a current user</h2>
       <form className="col col-md-6 m-auto" onSubmit={this.submitData}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control border-info" defaultValue={name} name="name" onChange={this.readData} required/>
        </div> 
        <div className="form-group">
            <label>User</label>
            <input type="text" className="form-control border-info" defaultValue={username} name="username" onChange={this.readData} required/>
        </div> 
        <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control border-info" defaultValue={phone} name="phone" onChange={this.readData} required/>
        </div> 
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control border-info" defaultValue={email} name="email" onChange={this.readData} required/>
        </div> 
        <div className="form-group">
            <label>password</label>
            <input type="password" className="form-control border-info" defaultValue={password} name="password" onChange={this.readData} required/>
        </div> 
        <button className="btn btn-outline-primary" type="submit">Edit</button>
       </form>
    </div>
       )
   }
   
    render(){

        return(
           <React.Fragment>
               {this.chargeForm()}
           </React.Fragment>
        )
    }
}

export default EditUser;