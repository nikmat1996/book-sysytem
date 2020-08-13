import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../redux/bookReducer/action'


export class Dash extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Filter: '',
            categoryFilter: 'all'
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { allBooks } = this.props
        let { categoryFilter, Filter } = this.state
        let uniqueCategory = {}
        return (
            <div className="centerEverything">
                <table>
                    <thead>
                        <tr>
                            <th><i className="fas fa-list-ol"></i></th>
                            <th>Name</th>
                            <th>Price
                                <select 
                                    name = 'Filter' 
                                    value = {Filter} 
                                    onChange= {this.handleChange}>
                                    <option value= ''></option>
                                    <option value= 'PASC'>ASC</option>
                                    <option value= 'PDSC'>DSC</option>
                                </select>
                            </th>
                            <th>Author</th>
                            <th>Category
                                <select 
                                    value={categoryFilter}
                                    name='categoryFilter'
                                    onChange={this.handleChange}>
                                        <option value='all' key='all'>All</option>
                                        {allBooks.map( book => {
                                        if(uniqueCategory[book.category])
                                            return null
                                        else{
                                            uniqueCategory[book.category] = 1
                                            return <option 
                                                        value={book.category} 
                                                        key={book.category}>{book.category}
                                                    </option>
                                        }})}
                                </select>
                            </th>
                            <th>Quantity
                                <select 
                                    name = 'Filter' 
                                    value = {Filter} 
                                    onChange= {this.handleChange}>
                                    <option value= ''></option>
                                    <option value= 'QASC'>ASC</option>
                                    <option value= 'QDSC'>DSC</option>
                                </select>
                            </th>
                            <th>edit</th>
                            <th>del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBooks
                            .sort((a,b) => {
                                if(Filter === 'QASC')
                                    return a.quantity - b.quantity
                                if(Filter === 'QDSC')
                                    return b.quantity - a.quantity
                                if(Filter === 'PASC')
                                    return a.price - b.price
                                if(Filter === 'PDSC')
                                    return b.price - a.price
                                else return 0
                            })
                            .filter(({ category })=> {
                                if(categoryFilter === 'all')
                                    return true
                                else{
                                    if(category === categoryFilter)
                                        return true
                                    else 
                                        return false
                                }
                                
                            })
                            .map((book,index) => <tr key = {book.key}>
                                <td>{index+1}</td>
                                <td>{book.name}</td>
                                <td>{book.price}</td>
                                <td>{book.author}</td>
                                <td>{book.category}</td>
                                <td>{book.quantity}</td>
                                <td><Link to= {`/dashboard/${book.key}`}><i className="fas fa-pen-fancy"></i></Link></td>
                                <td><i onClick={()=>this.props.deleteBook(book.key)} className="fas fa-trash"></i></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {!allBooks.length && <h3>Nothing here. ADD First !!</h3>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allBooks : state.bookReducer.allBooks
})

const mapDispatchToProps = dispatch => ({
    deleteBook : payload => dispatch(deleteBook(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dash)