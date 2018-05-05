import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'Bills Playlist',
      playlistTracks: []};
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
  }

    addTrack(track){
      if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        console.log("Debug: Breaking out of addTrack function because we've already got that in our playlistTracks")
        return;
} else {
  console.log("Debug: addTrack function pushing the track to playlistTracks")
  let tracks = this.state.playlistTracks;
  tracks.push(track);
  this.setState({playlistTracks: tracks});
}
    }

    removeTrack(track){
      console.log('setting a variable for me to save the current instance of playlistTracks from removeTrack')
      let tracks = this.state.playlistTracks;
      console.log (tracks)
      const newTracks = tracks.filter(playlistTrack => track.id !== playlistTrack.id);
      console.log('setting the state')
      this.setState({playlistTracks: newTracks});
    }

    updatePlaylistName(name){
      console.log("Debug: Setting playlistName")
      this.setState({playlistName: name});
    }

    savePlaylist(){
      const trackList = this.state.playlistTracks.map(track => track.uri);
      const listName = this.state.playlistName;
      Spotify.savePlaylist(listName, trackList);
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
        })
    }

    search(term){
      Spotify.search(term).then(tracks =>{
        this.setState({searchResults: tracks});
      });
    }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search}/>
              <div className="App-playlist">
                <SearchResults
                  searchResults={this.state.searchResults}
                  onAdd={this.addTrack}/>
                <Playlist
                  onSave={this.savePlaylist}
                  playlistName={this.state.playlistName}
                  playlistTracks={this.state.playlistTracks}
                  onRemove={this.removeTrack}
                  onNameChange={this.updatePlaylistName}/>
              </div>
            </div>
      </div>
    );
  }
}

export default App;
