import React,{Component} from 'react';
class CreateUser extends Component{
   
   state={
       user:{
            name:'',
            username:'',
            phone:'',
            email:'',
            password:'',
       }
   }

   readData = (e) => {
       this.setState({
           user:{
               ...this.state.user,
              [e.target.name] : e.target.value,
           }
       })
   }

   submitData = (e) =>{
       e.preventDefault();
this.props.createUser(this.state.user)
       
   }
   
   
    render(){
        return(
            <div className="container">
                <h2 className="text-center mt-3">Create a new user</h2>
               <form className="col col-md-6 m-auto" onSubmit={this.submitData}>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control border-info" placeholder="enter name" name="name" onChange={this.readData} required/>
                </div> 
                <div className="form-group">
                    <label>User</label>
                    <input type="text" className="form-control border-info" placeholder="enter user" name="username" onChange={this.readData} required/>
                </div> 
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control border-info" placeholder="enter phone" name="phone" onChange={this.readData} required/>
                </div> 
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control border-info" placeholder="enter email" name="email" onChange={this.readData} required/>
                </div> 
                <div className="form-group">
                    <label>password</label>
                    <input type="password" className="form-control border-info" placeholder="enter password" name="password" onChange={this.readData} required/>
                </div> 
                <button className="btn btn-outline-primary" type="submit">Create</button>
               </form>
            </div>
        )
    }
}

export default CreateUser;