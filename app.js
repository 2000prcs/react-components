class App extends React.Component {

    render(){
        return(
            <div>GroceryList
                <h2>Mo's GroceryList</h2>
                <GroceryList item={['Cucumbers', 'Kale']}/>
            </div>
        );
    }
}


class GroceryList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            over: false
        }
    }

    onListItemMouseOver(){
        this.setState({
            over: !this.state.over
        });
    }

    render(){
        var style = {
            fontWeight: this.state.over? 'bold' : 'normal'
        }
        return(
            <ul>
                <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.item[0]}</li>
                <li>{this.props.item[1]}</li>
            </ul>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);

// class Rice extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             over: false
//         }
//     }

//     onListItemMouseOver(){
//         this.setState({
//             over: !this.state.over
//         });
//     }

//     render(){
//         var style = {
//             fontWeight: this.state.over? 'bold' : 'normal'
//         }
//         return(
//             <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.item}</li>
//         );
//     }
// }

// class Milk extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             over: false
//         }
//     }

//     onListItemMouseOver(){
//         this.setState({
//             over: !this.state.over
//         });
//     }

//     render(){
//         var style = {
//             fontWeight: this.state.over? 'bold' : 'normal'
//         }

//         return(
//             <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.item}</li>
//         );
//     }
// }





