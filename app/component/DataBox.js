'use strict';
import React from 'react';
import $ from 'jquery';
import DataBoxForm from './DataBoxForm';

class DataBox extends React.Component {
    /**
     * 两种方法实现的效果一致
     */
    /*render(){
     return <p> Hello . {this.props.name}</p>
     };*/

    constructor(props) {
        super(props);
        this.state = {data:[]};
        this.getData();
        //() => setInterval


    }

    getData() {
        console.log("获取数据请求....");
        $.ajax({
            url:this.props.url,
            dateType:'json',
            //data:data,
            success : user => {
                console.log("数据返回成功 = =="+ user.length);
                this.setState({data:user});
        console.log("数据解析 = 88888=="+ this.state.data);


            },
           error: (xhr,status,error) => {
                console.log("数据访问失败");
            console.log(error);
           }
        });

    }

  render(){
      return (
          <div>
              <div>登陆：</div>
                <DataBoxForm  data={this.state.data}/>
          </div>


      );


  }

}
export {DataBox as default};//使用这个是必要的不然会报错
