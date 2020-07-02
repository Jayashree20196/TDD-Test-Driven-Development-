import React, { Component} from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super();

        this.state = {
            gifts : []
        }
    }

    addGift = () => {
        const { gifts } = this.state;
        const ids =  this.state.gifts.map(id => ids);
        const max_id =ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({
            id : max_id + 1
        })
        this.setState({gifts})
    }

    render() {
        return (
            <div>
                <h1>Gift Giver</h1>
                <Button className='btn-app' onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}
export default App;