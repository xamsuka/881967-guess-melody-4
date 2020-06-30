import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {GameType, TRACK_CLASS} from '../../const.js';

class Track extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isPlaying: props.isPlaying};
    this.audioRef = React.createRef();
  }

  _getVariantElement(indexTrack) {
    return (
      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value={`answer-${indexTrack}`}
          id={`answer-${indexTrack}`}
        />
        <label className="game__check" htmlFor={`answer-${indexTrack}`}>
          Отметить
        </label>
      </div>
    );
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
  }

  componentWillUnmount() {

  }

  render() {
    const {audioSrc, isPlaying, questionType = GameType.ARTIST, indexTrack, onPlayButtonClick} = this.props;
    const variantElement = questionType === GameType.GENRE ? this._getVariantElement(indexTrack) : ``;
    const trackClass = isPlaying ? TRACK_CLASS.PAUSE : TRACK_CLASS.PLAY;

    return (
      <div className="track">
        <button className={`track__button ${trackClass}`} type="button" onClick = {() => {
          this.setState(() => ({
            isPlaying: !this.state.isPlaying
          }));
          onPlayButtonClick();
        }} />

        <div className="track__status">
          <audio ref={this.audioRef} src={audioSrc} />
        </div>
        {variantElement}
      </div>
    );
  }
}

Track.propTypes = {
  audioSrc: PropTypes.any.isRequired,
  questionType: PropTypes.string.isRequired,
  indexTrack: PropTypes.number,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default Track;
