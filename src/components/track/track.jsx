import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {TRACK_VARIANT, TRACK_CLASS} from '../../const.js';

class Track extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isPlaying: false};
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
    if (this.state.isPlaying) {
      this.audioRef.current.pause();
    } else {
      this.audioRef.current.play();
    }
  }

  render() {
    const {audioSrc, questionType = TRACK_VARIANT.ARTIST, indexTrack, onPlayButtonClick} = this.props;
    const variantElement = questionType === TRACK_VARIANT.GENRE ? this._getVariantElement(indexTrack) : ``;
    const trackClass = this.state.isPlaying ? TRACK_CLASS.PAUSE : TRACK_CLASS.PLAY;

    return (
      <div className="track">
        <button className={`track__button ${trackClass}`} type="button" onClick = {() => {
          onPlayButtonClick();
          this.setState(() => ({
            isPlaying: !this.state.isPlaying
          }));

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
};

export default Track;
