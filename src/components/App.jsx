import { Component } from 'react'
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { RotatingLines } from  'react-loader-spinner'


export class App extends Component {
  state = {
        page: 1,
        query: '',
        images: [],
        
    }
  handleFormSubmit = query => {
      this.setState({ query })
  }
  
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }
  componentDidUpdate(_, prevState) {
    const { query, page } = this.state
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=29953966-c475d5dff4ed5a25f1b37ba96&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
        .then(data => this.setState(prevState => ({images: [ ...prevState.images, ...data.hits ]}))
        )
        
    }
  }
  render() {
    return (
    <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.images && <ImageGallery images={this.state.images} />}
        
        <button type="button" onClick={this.loadMore}>Load more</button>
    </div>
  );
  }
    
  
  
};
