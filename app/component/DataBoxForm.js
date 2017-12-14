'use strict';

import React from 'react';
import $ from 'jquery';

class DataBoxForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {reslut:false};
    }

    handleSubmit(event){
        console.log("......");
      event.preventDefault();
      let name = this.refs.userName.value;
      let password = this.refs.password.value;
      console.log("用户名 ：" + name + "密码 ：" +password);

      this.props.data.map(user => {
          console.log("用户名 ==：" + user.name + "密码 = ：" +user.password);
          if (user.name == name && password == user.password){
             console.log("登陆成功");
             this.setState({reslut:true});
              document.getElementById('test').innerHTML = '登陆成功';
          }
          
      });

    }


    render(){
        return (
         <div>
         <form onSubmit={this.handleSubmit.bind(this)}>
         <div>
         <input type="text" placeholder="用户名：" ref = "userName"/>
         <br/>
         <input type="password" placeholder="密码：" ref = "password"/>
         <br/>
         <button type = "submit">登陆</button>
         </div>
         </form>
         <div id ="test"> </div>
         </div>
    );
    }
}

export {DataBoxForm as default};