import React, {Component} from 'react'

export class Searchbar extends Component {
    state = {
        query: '',
    }

    onInputChange = (e) => {
        this.setState( {query: e.currentTarget.value.toLowerCase() })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.query)
        this.setState({query: ''})

    }
    render() {
        return (
            <div>
                <header className="searchbar">
                    <form className="form">
                        <button type="submit"
                            className="button"
                            onSubmit={this.handleSubmit}>
                        <span className="button-label">Search</span>
                            
                        </button>

                        <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                            placeholder="Search images and photos"
                            value={this.state.query}
                            onChange={this.onInputChange}
                        />
                    </form>
                </header>
            </div>
        )
    }
}