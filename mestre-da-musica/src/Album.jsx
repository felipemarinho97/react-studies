import React from 'react';


class Album extends React.Component {
  constructor(params) {
    super(params)
    console.log(params);

  }

  render() {
    return (
      <div>
        <strong>Album:</strong> <em>{this.props.album.title}</em>, {this.props.album['first-release-date']}
      </div>
    )
  }
}

export default Album;
