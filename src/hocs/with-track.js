import React, {PureComponent} from "react";
import Track from "../components/track/track.jsx";

const widthTrack = (Component) => {
  return class WidthTrack extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTrackId: -1,
      };

      this._changeActiveAudio = this._changeActiveAudio.bind(this);
    }

    _changeActiveAudio(idTrack) {
      this.setState((prevState) => ({
        activeTrackId: prevState.activeTrackId === idTrack ? -1 : idTrack,
      }));
    }

    render() {
      const activeTrackId = this.state.activeTrackId;

      return <Component
        {...this.props}
        renderTrack = {(src, id) => {
          return <Track
            audioSrc = {src}
            isPlaying = {activeTrackId === id ? true : false}
            indexTrack = {id}
            onPlayButtonClick = {this._changeActiveAudio}
          />;
        }}
      />;
    }
  };
};

export default widthTrack;
