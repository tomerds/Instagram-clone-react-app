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
    };
  };

  componentDidMount() {
    this.setState({
      data: dummyData
    })
    console.log(this.state.data, 'mounted')

  }

  render() {
    console.log(this.state.data, 'rendering!')
    return (
      <div className="app">
        <SearchBar />
        <div className="feed">
          {this.state.data.map(obj => <PostContainer data={obj} key={obj.id} />)}
        </div>
      </div>
    )
  }
}

export default App;
