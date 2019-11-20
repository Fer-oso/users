import React,{Component} from 'react';
import Navigation from './Navigation';
import TableUsers from './TableUsers';

import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import User from './User';
import CreateUser from './CreateUser';
import EditUser from './EditUser'; 
class Routes extends Component{
//QUERY API

state={
    users:[]
}

    getAPI = () =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res)
          this.setState({
              users:res.data
          })
        })
    }

    deleteUser = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res=>{ 
                    console.log(res)
                   const users = [...this.state.users];
                   let results = users.filter(user=>user.id !== id);
                    this.setState({
                        users : results
                    })
                })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          }) 
    }

    createUser = (user) => {
       axios.post(`https://jsonplaceholder.typicode.com/posts`, {user})
       .then(res=>{
        Swal.fire(
            'Good job!',
            'You user has created!',
            'success'
          )
          let userID = {id: res.data.id};
          const user = Object.assign({}, res.data.user, userID)
            this.setState(prevState =>({
                users:[...prevState.users, user]
            }))

       })
    }
       

    editUser = (user) =>{
        const {id} = user;
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{user})
        .then(res=>{
            Swal.fire(
                'Good job!',
                'You user has edited!',
                'success'
              )
            let userID = res.data.id;
            const users = [...this.state.users];
            const userEdit = users.findIndex(user => userID === user.id);
            users[userEdit] = user;
            this.setState({
                users
            })
        })
    }

    componentWillMount(){
        this.getAPI();
    }
    
    render(){
        return(
            <div className="container">
            <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path='/' render={()=>{return(
                    <TableUsers
                        users={this.state.users}
                        deleteUser = {this.deleteUser}
                    />
                )}}/>

                <Route exact path='/user/:id' render={(props)=>{ 
                    let id = props.location.pathname.replace('/user/', '');
                    const users = this.state.users;            
                    let filter= users.filter(user =>(user.id === Number(id)));
                    return(
                        <User
                            user={filter[0]}
                        />
                    )
                }} 
                />

                <Route exact path ='/create' render={()=>{
                    return(
                        <CreateUser
                            createUser={this.createUser}
                        />
                    )
                    } }
                />

                <Route exact path='/edit/:id' render={(props)=>{ 
                    let id = props.location.pathname.replace('/edit/', '');
                    const users = this.state.users;            
                    let filter= users.filter(user =>(user.id === Number(id)));
                    return(
                        <EditUser
                            user={filter[0]}
                            editUser = {this.editUser}
                        />
                    )
                }} 
                />

            </Switch>
            </BrowserRouter>
          </div>
        )
    }
}

export default Routes;