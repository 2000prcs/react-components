class App extends React.Component {

    render(){
        return(
            <div>GroceryList
                <h2>Mo's GroceryList</h2>
                <GroceryList items={['Cucumbers', 'Kale']}/>
            </div>
        );
    }
}

class GroceryListItem extends React.Component {
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
                <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.item}</li>
            </ul>
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

    render(){
        return(
            <ul>
                {this.props.items.map(item =>
                    <GroceryListItem item ={item}/>
                )}
            </ul>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);

