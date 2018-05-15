import React from 'react';
import ArtistProfile from './ArtistProfile'
import Album from './Album'
import Loading from './Loading'
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artistName: '',
      artist: null,
      loadingArtist: false,
      albums: null,
      loadingAlbums: false,
    }
  }

  search(artistName) {
    const BASE_URL = 'http://musicbrainz.org/ws/2/';
    const QUERY_URL = `${BASE_URL}artist?query=%22${artistName}%22&fmt=json&limit=1`;
    this.setState({loadingArtist: true})
    fetch(QUERY_URL, {
      method: 'GET'
    }).then(response => response.json())
      .then(response => {
        this.setState({artist: response.artists[0], loadingArtist: false, loadingAlbums: true});
        fetch(BASE_URL + 'artist/' + response.artists[0].id + '?inc=release-groups&fmt=json')
          .then(response => response.json())
          .then(response => {
            this.setState({albums: response['release-groups'], loadingAlbums: false})
            console.log(response);
          })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="App-title h1">Mestre da Música</div>
        <FormGroup className="search-header">
          <InputGroup>
            <FormControl
              value={this.state.artistName}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search(this.state.artistName)
                }
              }}
              onChange={event => {
                this.setState({artistName: event.target.value})
              }}
              placeholder="Nome do artista" />
            <InputGroup.Addon
              onClick={() => this.search(this.state.artistName)}
            >Pesquisar</InputGroup.Addon>
        </InputGroup>

        </FormGroup>
        {
          !this.state.loadingArtist ?
            this.state.artist ?
              <div>
              <ArtistProfile
                artist={this.state.artist}
              />
              <br/>
                <div className="Gallery">
                  {
                    !this.state.loadingAlbums ?
                      this.state.albums ?
                      this.state.albums.map((e, k) => {
                        return (<Album album={e} key={k}/>)
                      }) : 'Nenhum album encontrado'
                    : <div>Carregando albums<Loading /></div>
                  }
                </div>
              </div>
            : <div></div>
          : <div>Carregando artista<Loading /></div>
        }
      </div>
    )
  }
}

export default App;
