import React from 'react';
class Api3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mydata: [] };
    }
    componentDidMount() {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(res => {
                console.table(res)
            })
    }
    render() {
        return (
            <div>
                {this.state.mydata.map((value, index) => {
                    return (<div key={index}>
                        <table border="1" key={value.id} style={{ marginBottom: "20px" }}>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Image</th>
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>{value.price}</td>
                                <td>{value.category}</td>
                                <td><img width={150} src={value.image} /></td>
                            </tr>
                        </table>
                    </div>)
                })}
            </div>
        )
    }
}
export default Api3;