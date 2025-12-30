import axios from 'axios';
import React from 'react';
class Add_api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    onSubmit(){
        var myformData = new FormData()
        myformData.append("todo_title", this.state.txt1)
        myformData.append("todo_details", this.state.txt2)

        axios.post("https://akashsir.in/myapi/crud/todo-add-api.php", myformData)
        .then(res => {
            console.log(res.data)
            if(res.data.flag === "1"){
                alert("Record Added")
            } else {
                alert("Error" + res.data.message)
            }
            window.location.href = "/View_api"
        })
        .catch(err => alert(err))
    }
    render() {
        return (
            <div>
                No1:- <input type='text' onChange={(e) => this.setState({txt1: e.target.value})}/><br/>
                No2:- <input type='text' onChange={(e) => this.setState({txt2: e.target.value})}/><br/>
                <input type='button' value="ClickMe" onClick={this.onSubmit.bind(this)}/>
            </div>
        );
    }
}

export default Add_api;