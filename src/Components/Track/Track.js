import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(){
   this.props.onAdd(this.props.track);
    }
    removeTrack(){
      this.props.onRemove(this.props.track);
    }

  renderAction(){
    if(this.props.isRemoval){
      return <a className="Track-action" onClick={this.removeTrack}>-</a>;
    } else {
      return <a className="Track-action" onClick={this.addTrack}>+</a>
    }
  }

  render(){
    const trackProps = this.props.track;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{trackProps.title}</h3>
          <p> {trackProps.artist} |  {trackProps.album} </p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
}
export default Track;
