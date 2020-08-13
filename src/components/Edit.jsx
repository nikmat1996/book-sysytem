import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editBook } from '../redux/bookReducer/action'

export class Edit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            author: '',
            price: '',
            category: '',
            quantity: '',
            key: ''
        }
    }

    componentDidMount() {
        let key = this.props.match.params.key
        console.log(key)

        let book = this.props.allBooks.find( book => book.key === key)

        this.setState({
            ...book
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.editBook(this.state)
        this.props.history.push('/dashboard')
    }
    
    render() {
        return (
            <div className='addFormContainer'>
                <form>
                    <h3>EDIT</h3>
                    <div className='inputFields'>
                        <label>Name </label>
                        <input onChange={this.handleChange} value={this.state.name} name='name' type='text' placeholder= 'name' />
                    </div>
                    <div className='inputFields'>
                        <label>Author</label>
                        <input onChange={this.handleChange} value={this.state.author} name='author' type='text' placeholder= 'author' />
                    </div>
                    <div className='inputFields'>
                        <label>Price</label>
                        <input onChange={this.handleChange} value={this.state.price} name='price' type='number' placeholder= 'price' />
                    </div>
                    <div className='inputFields'>
                        <label>Quantity</label>
                        <input onChange={this.handleChange} value={this.state.quantity} name='quantity' type='number' placeholder= 'quantity' />
                    </div>
                    <div className='inputFields'>
                        <label>Category</label>
                        <input onChange={this.handleChange} value={this.state.category} name='category' placeholder= 'category' />
                    </div>
                    <input style={{marginTop:'26px'}} type='submit' onClick={this.handleClick} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allBooks : state.bookReducer.allBooks
})

const mapDispatchToProps = dispatch => ({
    editBook: payload => dispatch(editBook(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
