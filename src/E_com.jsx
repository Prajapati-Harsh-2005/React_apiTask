import React from 'react';
import './mystyle.css'
class E_com extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata : [] };
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => {
            this.setState({mydata : res})
        })
    }
    render() {
        return (<React.Fragment>
            <h3 className='heading'>Product Grid</h3>
            <div className='container'>
                <div className='row product'>
                    {this.state.mydata.map(productdata => {
                        return (
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="ccc">
                                        <p className="text-center"><img src={productdata.image} alt={productdata.image}
                                            width={100}/></p>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="text-center">{productdata.title}</h5>
                                        <p className="text-center">Price:- {productdata.price}</p>
                                        <p className="text-center"><input type='submit' name='Save' value="Buy" className="cc1"/></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>

        );
    }
}

export default E_com;