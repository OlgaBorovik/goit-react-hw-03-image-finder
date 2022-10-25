import React, {Component} from 'react'

export class Searchbar extends Component {
    state = {
        image: '',
    }

    componentDidMount() {
        fetch('https://pixabay.com/api/?q=cat&page=1&key=29953966-c475d5dff4ed5a25f1b37ba96&image_type=photo&orientation=horizontal&per_page=12')
            .then(res => res.json())
            .then(image => this.setState({image}))
            .then(console.log(this.state.image))
    }
    render() {
        return (
            <div>
                <header className="searchbar">
                    <form className="form">
                    <button type="submit" className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                    </form>
                </header>
            </div>
        )
    }
}