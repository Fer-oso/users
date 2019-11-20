import React,{Component} from 'react';
class User extends Component{
    
renderUser = (props) =>{
    if(!props.user) return null;
    const {name,username,email,phone} = this.props.user;
    return(
        <div className="container d-flex justify-content-center">
            <ul className="list-group col col-md-6 row mt-5">
            <li className="list-group-item d-flex">
            <h2>{name}</h2>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                    {username}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                    {email}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                    {phone}
                </li>
            </ul>    
        </div>
    )
}
    
    render(){    
        return(
            <React.Fragment>
                {this.renderUser(this.props)}
            </React.Fragment>
               
          
        )
    }
}

export default User;