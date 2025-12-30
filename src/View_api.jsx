import React from 'react';
import axios from 'axios';
class Axios extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todo_list: [], editIndex : null };
    }
    componentDidMount() {
        axios("https://akashsir.in/myapi/crud/todo-list-api.php")
            .then(res => {
                console.log(res.data.todo_list)
                this.setState({
                    todo_list: res.data.todo_list
                })
            })
            .catch(err => console.log(err))
    }
    deleteData(index){
        var newArray = this.state.todo_list.splice(index, 1);
        this.setState({
            todolist : newArray
        })
    }
    editData(index){
        this.setState({
            myarray : this.state.todo_list[index],
            editIndex : index
        })
    }
    render() {
        return (
            <table border={1}>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Images</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todo_list.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.todo_id}</td>
                                <td>{value.todo_title}</td>
                                <td>{value.todo_details}</td>
                                <td><img src={value.todo_image} width={50} /></td>
                                <td><input type='button' value="Delete" onClick={this.deleteData.bind(this)}/>
                                    <input type='button' value="Edit" onClick={this.editData.bind(this)}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}

export default Axios;