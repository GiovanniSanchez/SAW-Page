import React, { Component } from 'react';
import '../../src/css/view-art.css';

export class ViewArt extends Component {
  
  render() {
    return (
      <div>
        <div className="square">
          <div className="content">
          <img src={this.props.albumArt}/>
          </div>
        </div>
      </div>
    );
  }
}