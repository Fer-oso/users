(this.webpackJsonpcrudphotos=this.webpackJsonpcrudphotos||[]).push([[0],{112:function(e,t,a){e.exports=a(274)},274:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(109),l=a.n(c),o=a(39),s=a(9),i=a(10),u=a(12),m=a(11),p=a(13),d=a(16),f=function(){return n.a.createElement("div",{className:"container d-flex justify-content-center"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light navbar-brand "},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement(d.b,{to:"/users"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/"},"Inicio"))),n.a.createElement(d.b,{to:"/create"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/create"},"Create"))))))},b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("table",{class:"table table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"ID"),n.a.createElement("th",{scope:"col"},"Name"),n.a.createElement("th",{scope:"col"},"User"),n.a.createElement("th",{scope:"col"},"Email"),n.a.createElement("th",{scope:"col"},"Phone"),n.a.createElement("th",{scope:"col"},"Action"))),n.a.createElement("tbody",null,Object.keys(this.props.users).map((function(t){var a=e.props.users[t],r=a.email,c=a.id,l=a.name,o=a.phone,s=a.username;return n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},c),n.a.createElement("td",null,l),n.a.createElement("td",null,s),n.a.createElement("td",null,r),n.a.createElement("td",null,o),n.a.createElement("td",null,n.a.createElement(d.b,{to:"/user/".concat(c)},n.a.createElement("button",{className:"btn btn-success btn-sm"},"View")),n.a.createElement(d.b,{to:"/edit/".concat(c)},n.a.createElement("button",{className:"btn btn-info btn-sm"},"Edit")),n.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return e.props.deleteUser(c)},type:"button"},"Delete")))})))))}}]),t}(r.Component),h=a(17),E=a(28),v=a.n(E),g=a(29),y=a.n(g),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).renderUser=function(e){if(!e.user)return null;var t=a.props.user,r=t.name,c=t.username,l=t.email,o=t.phone;return n.a.createElement("div",{className:"container d-flex justify-content-center"},n.a.createElement("ul",{className:"list-group col col-md-6 row mt-5"},n.a.createElement("li",{className:"list-group-item d-flex"},n.a.createElement("h2",null,r)),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center list-group-item-action"},c),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center list-group-item-action"},l),n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center list-group-item-action"},o)))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.renderUser(this.props))}}]),t}(r.Component),j=a(22);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(j.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={user:{name:"",username:"",phone:"",email:"",password:""}},a.readData=function(e){a.setState({user:w({},a.state.user,Object(j.a)({},e.target.name,e.target.value))})},a.submitData=function(e){e.preventDefault(),a.props.createUser(a.state.user)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"text-center mt-3"},"Create a new user"),n.a.createElement("form",{className:"col col-md-6 m-auto",onSubmit:this.submitData},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Name"),n.a.createElement("input",{type:"text",className:"form-control border-info",placeholder:"enter name",name:"name",onChange:this.readData,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"User"),n.a.createElement("input",{type:"text",className:"form-control border-info",placeholder:"enter user",name:"username",onChange:this.readData,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Phone"),n.a.createElement("input",{type:"text",className:"form-control border-info",placeholder:"enter phone",name:"phone",onChange:this.readData,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Email"),n.a.createElement("input",{type:"email",className:"form-control border-info",placeholder:"enter email",name:"email",onChange:this.readData,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"password"),n.a.createElement("input",{type:"password",className:"form-control border-info",placeholder:"enter password",name:"password",onChange:this.readData,required:!0})),n.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},"Create")))}}]),t}(r.Component);a(138);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(j.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={user:C({},a.props.user)},a.readData=function(e){var t;a.setState({user:C({},a.state.user,(t={},Object(j.a)(t,e.target.name,e.target.value),Object(j.a)(t,"id",a.props.user.id),t))})},a.submitData=function(e){e.preventDefault(),a.props.editUser(a.state.user)},a.chargeForm=function(){if(!a.props.user)return null;var e=a.props.user,t=e.name,r=e.username,c=e.phone,l=e.email,o=e.password;return n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"text-center mt-3"},"Edit a current user"),n.a.createElement("form",{className:"col col-md-6 m-auto",onSubmit:a.submitData},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Name"),n.a.createElement("input",{type:"text",className:"form-control border-info",defaultValue:t,name:"name",onChange:a.readData,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"User"),n.a.createElement("input",{type:"text",className:"form-control border-info",defaultValue:r,name:"username",onChange:a.readData,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Phone"),n.a.createElement("input",{type:"text",className:"form-control border-info",defaultValue:c,name:"phone",onChange:a.readData,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Email"),n.a.createElement("input",{type:"email",className:"form-control border-info",defaultValue:l,name:"email",onChange:a.readData,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"password"),n.a.createElement("input",{type:"password",className:"form-control border-info",defaultValue:o,name:"password",onChange:a.readData,required:!0})),n.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},"Edit")))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.chargeForm())}}]),t}(r.Component),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={users:[]},a.getAPI=function(){y.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){console.log(e),a.setState({users:e.data})}))},a.deleteUser=function(e){v.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&(y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(t){console.log(t);var r=Object(o.a)(a.state.users).filter((function(t){return t.id!==e}));a.setState({users:r})})),v.a.fire("Deleted!","Your file has been deleted.","success"))}))},a.createUser=function(e){y.a.post("https://jsonplaceholder.typicode.com/posts",{user:e}).then((function(e){v.a.fire("Good job!","You user has created!","success");var t={id:e.data.id},r=Object.assign({},e.data.user,t);a.setState((function(e){return{users:[].concat(Object(o.a)(e.users),[r])}}))}))},a.editUser=function(e){var t=e.id;y.a.put("https://jsonplaceholder.typicode.com/posts/".concat(t),{user:e}).then((function(t){v.a.fire("Good job!","You user has edited!","success");var r=t.data.id,n=Object(o.a)(a.state.users),c=n.findIndex((function(e){return r===e.id}));n[c]=e,a.setState({users:n})}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.getAPI()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement(d.a,null,n.a.createElement(f,null),n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/users",render:function(){return n.a.createElement(b,{users:e.state.users,deleteUser:e.deleteUser})}}),n.a.createElement(h.a,{exact:!0,path:"/user/:id",render:function(t){var a=t.location.pathname.replace("/user/",""),r=e.state.users.filter((function(e){return e.id===Number(a)}));return n.a.createElement(O,{user:r[0]})}}),n.a.createElement(h.a,{exact:!0,path:"/create",render:function(){return n.a.createElement(D,{createUser:e.createUser})}}),n.a.createElement(h.a,{exact:!0,path:"/edit/:id",render:function(t){var a=t.location.pathname.replace("/edit/",""),r=e.state.users.filter((function(e){return e.id===Number(a)}));return n.a.createElement(P,{user:r[0],editUser:e.editUser})}}))))}}]),t}(r.Component);var k=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[112,1,2]]]);
//# sourceMappingURL=main.b3f3981a.chunk.js.map