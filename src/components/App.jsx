import { Component } from 'react'
import {Searchbar} from './Searchbar/Searchbar'

export class App extends Component {
  state = {
        page: 1,
        query: '',
        images: {},
        
    }
  handleFormSubmit = query => {
      this.setState({ query })
  }
  
  componentDidUpdate(_, prevState) {
    const {query, page} = this.state
    if (prevState.query !== this.state.query) {
        fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=29953966-c475d5dff4ed5a25f1b37ba96&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(console.log(res))
            // .then(images => this.setState({ images })) 
            // .then(console.log(this.state.images.hits))
      }
        
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
