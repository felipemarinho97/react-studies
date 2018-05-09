import React from 'react';


class ArtistProfile extends React.Component {
  constructor(params) {
    super(params)

  }

  render() {
    let artist = this.props.artist ? this.props.artist : {name:"",score:"0", type:'', country:'', tags : []}
    // const profile = artist

    return (
      <div className="Profile">
        <div className="Artist-picture h3">{artist.name}</div>
        <div className="Artist-name"><strong>Nota:</strong> {artist.score}</div>
        <div className="Artist-type"><strong>Tipo:</strong> {artist.type}</div>
        <div className="Artist-country"><strong>País:</strong> {artist.country}</div>
        <div className="Artist-tags"><strong>Tags:</strong> 
          {
            artist.tags ? artist.tags.map((element, key) => {
              return (element.name + ', ')
            }) : ' Nenhuma tag'
          }
        </div>
      </div>
    );
  }
}


export default ArtistProfile;
