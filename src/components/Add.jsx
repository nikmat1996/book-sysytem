import React, { Component } from 'react';
import './Add.css';
import { connect } from 'react-redux';
import { addBook } from '../redux/bookReducer/action';
import uuid from 'uuid-random'

export class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            author: '',
            price: '',
            category: '',
            quantity: ''
        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault()
        console.log(this.state)
        let { addBook } = this.props
        let payload = {
            ...this.state,
            key: uuid()
        }
        addBook(payload)
    }

    
    render() {
        return (
            <div className='addFormContainer'>
                <form>
                    <div className='inputFields'>
                        <label>Name </label>
                        <input onChange={this.handleChange} name='name' type='text' placeholder= 'name' />
                    </div>
                    <div className='inputFields'>
                        <label>Author</label>
                        <input onChange={this.handleChange} name='author' type='text' placeholder= 'author' />
                    </div>
                    <div className='inputFields'>
                        <label>Price</label>
                        <input onChange={this.handleChange} name='price' type='number' placeholder= 'price' />
                    </div>
                    <div className='inputFields'>
                        <label>Quantity</label>
                        <input onChange={this.handleChange} name='quantity' type='number' placeholder= 'quantity' />
                    </div>
                    <div className='inputFields'>
                        <label>Category</label>
                        <input onChange={this.handleChange} name='category' placeholder= 'category' />
                    </div>
                    <input style={{marginTop:'26px'}} type='submit' onClick={this.handleClick} />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addBook: payload => dispatch(addBook(payload))
})

export default connect(null, mapDispatchToProps)(Add)

