import React from 'react';

import MakerItem from '../maker-item/maker-item.component';
import SearchBox from '../search-box/search-box.component';

import './directory-maker.styles.scss';
import { INITIAL_MAKERS_DATA } from './directory.data';


class DirectoryMaker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      makers: INITIAL_MAKERS_DATA,
      searchfield: ''
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  }

  render() {

    const filteredMakers = this.state.makers.filter(maker => {
      return maker.title
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div>
        <div className='search-box'>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <div 
          className="directory-maker-menu"
          style={{
            overflowY: "scroll"
          }}
        >
          {filteredMakers.map(({ title, imgUrl, id, linkUrl }) => (
            <MakerItem key={id} title={title} imgUrl={imgUrl} linkUrl={linkUrl}/>
          ))}
        </div>
      </div>
    );
  }
}

export default DirectoryMaker;