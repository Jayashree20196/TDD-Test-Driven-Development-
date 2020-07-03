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
        //destructing gifts from state
        const { gifts } = this.state;
        const ids =  this.state.gifts.map(gift => gift.id);
        const max_id = ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({
            id : max_id + 1
        })
        this.setState({gifts})
    }

    render() {
        return (
            <div>
                <h1>Gift Giver</h1>
                <div className='gift-list'>
                    {
                        this.state.gifts.map(gift => {
                            return(<div key={gift.id}></div>)
                        })
                    }
                </div>
                <Button className='btn-app' onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}
export default App;