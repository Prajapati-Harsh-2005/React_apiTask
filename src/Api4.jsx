import React from 'react';
class Api4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata : [] };
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => {
            console.table(res)
        })
    }
    render() {
        return (
            <div>
                {this.state.mydata.map((value, index) => {
                    return(<div key={index}>
                        <h1>{value.id}</h1>
                        <h2>{value.name}</h2>
                        <h2>{value.username}</h2>
                        <h2>{value.email}</h2>
                    </div>)
                })}
            </div>
        );
    }
}

export default Api4;