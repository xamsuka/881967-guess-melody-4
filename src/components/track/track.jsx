import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {TRACK_CLASS} from "../../const.js";

class Track extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: props.isPlaying,
    };

    this.audioRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
  }

  render() {
    const {audioSrc, isPlaying, indexTrack, onPlayButtonClick} = this.props;
    const trackClass = isPlaying ? TRACK_CLASS.PAUSE : TRACK_CLASS.PLAY;

    return (
      <React.Fragment>
        <button
          className={`track__button ${trackClass}`}
          type="button"
          onClick={() => {
            this.setState(() => ({
              isPlaying: !this.state.isPlaying,
            }));
            onPlayButtonClick(indexTrack);
          }}
        />

        <div className="track__status">
          <audio ref={this.audioRef} src={audioSrc} />
        </div>
      </React.Fragment>
    );
  }
}

Track.propTypes = {
  audioSrc: PropTypes.any.isRequired,
  indexTrack: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default Track;
