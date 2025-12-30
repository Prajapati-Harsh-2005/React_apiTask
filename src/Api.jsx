import React from 'react';
class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mydata : [] };
  }
  componentDidMount(){
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({mydata : res});
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.mydata.map((value, index) => {
          return(<div key={index}>
            <h1 style={{color : "skyblue"}}>{value.title}</h1>
            <h2 style={{color : "salmon"}}>{value.category}</h2>
            <b>${value.price}</b><input type='checkbox' onClick={() => this.setState()}/><br/>
            <img width={150} src={value.image}/>
            </div>)
        })}
      </div>
    );
  }
}

export default Api;