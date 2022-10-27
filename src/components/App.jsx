import { Component } from 'react'
import {Searchbar} from './Searchbar/Searchbar'

export class App extends Component {
state = {
        query: '',
    }

    // componentDidMount() {
    //     fetch('https://pixabay.com/api/?q=cat&page=1&key=29953966-c475d5dff4ed5a25f1b37ba96&image_type=photo&orientation=horizontal&per_page=12')
    //         .then(res => res.json())
    //         .then(image => this.setState({image}))
    //         .then(console.log(this.state.image))
    // }
  handleFormSubmit = query => {
  console.log('query', query)
}

  render() {
    return (
    <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <button type="button">Load more</button>
    </div>
  );
  }
    
  
  
};
