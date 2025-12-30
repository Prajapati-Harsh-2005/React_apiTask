import React from 'react';
import axios from 'axios';
class Axios extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata : [] };
    }
    componentDidMount(){
        axios("https://fakestoreapi.com/products")
        .then(res => {
            console.log(res.data)
            this.setState({
                mydata : res.data
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {this.state.mydata.map((value, index) => {
                    return (<div key={index}>
                        <h2>{value.title}</h2>
                        <h2><img src={value.image} width={100}/></h2>
                        <h2>{value.price}</h2>
                        <hr/>
                    </div>)
                })}
            </div>
        );
    }
}

export default Axios;