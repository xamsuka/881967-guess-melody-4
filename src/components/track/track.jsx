import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {TRACK_VARIANT} from '../../const.js';

class Track extends PureComponent {
  constructor(props) {
    super(props);
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

  render() {
    const {audioSrc, questionType = TRACK_VARIANT.ARTIST, indexTrack} = this.props;
    const variantElement = questionType === TRACK_VARIANT.GENRE ? this._getVariantElement(indexTrack) : ``;

    return (
      <div className="track">
        <button className="track__button track__button--play" type="button" />
        <div className="track__status">
          <audio src={audioSrc} />
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
