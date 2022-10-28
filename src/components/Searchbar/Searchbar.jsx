import React, { Component } from 'react'
import {SearchbarHeader, SearchForm, Button, ButtonLabel, SearchFormInput} from "./Searchbar.styled"

export class Searchbar extends Component {
    state = {
        query: '',
    }

    onInputChange = (e) => {
        this.setState( {query: e.currentTarget.value.toLowerCase() })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.query.trim() === '') {
            alert('Введите поисковый запрос')
            return
        }
        this.props.onSubmit(this.state.query)
        this.setState({query: ''})

    }
    render() {
        return (
            <div>
                <SearchbarHeader className="searchbar">
                    <SearchForm className="form" onSubmit={this.handleSubmit}>
                        <Button type="submit">
                            <ButtonLabel>Search</ButtonLabel>
                        </Button>

                        <SearchFormInput
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                            placeholder="Search images and photos"
                            value={this.state.query}
                            onChange={this.onInputChange}
                        />
                    </SearchForm>
                </SearchbarHeader>
            </div>
        )
    }
}