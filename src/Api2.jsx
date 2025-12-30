import React from 'react';
// class Api2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { mydata : [] };
//     }
//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(res => {
//             this.setState({mydata : res});
//         });
//     }
//     render() {
//         return (
//            <div>
//             API Call <br/>
//             {/* Print Array Data Using Map */}
//             {this.state.mydata.map(value => (
//                 <li>Name:- {value.name} | Email:- {value.email} </li>
//             ))}
//            </div> 
//         );
//     }
// }
// export default Api2;
//----------------------------------------------------------------------------------------------------------------
class Api2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            item : [],
            isLoaded : false
         };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(json => {
            this.setState({
                isLoaded : true,
                item : json
            })
        });
    }
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(res => {
    //         console.table(res)
    //     })
    // }
    render() {
        var { isLoaded, item} = this.state;
        if(!isLoaded){
            return <div>Loading....</div>;
        }
        return (
            <div className='App'>
                <ul>
                    {item.map(item => (
                        <li key={item.id}>
                            Name:- {item.name} | Email:- {item.email}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Api2;