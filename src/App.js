import './App.css';

import React from 'react';

import PostContainer from './components/PostSection/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './data';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: []
    };
  };

  componentDidMount() {
    this.setState({
      data: dummyData
    })
    // console.log(this.state.data, 'mounted')

  }

  searchFilter = event => {
    const data = this.state.data.filter(post => {
      if (post.username === event.target.value) {
        return post;
      };
    });
    this.setState({
      filteredData: data
    })
  }

  render() {
    // console.log(this.state.data, 'rendering!')
    return (
      <div className="app">
        <SearchBar search={this.searchFilter} />
        <div className="feed">
          {/* {this.state.data.map(obj => <PostContainer data={obj} key={obj.id} />)} */}
          {this.state.filteredData.length > 0 ? this.state.filteredData.map(obj => <PostContainer data={obj} key={obj.id} />) : this.state.data.map(obj => <PostContainer data={obj} key={obj.id} />)}
        </div>
      </div>
    )
  }
}

export default App;
