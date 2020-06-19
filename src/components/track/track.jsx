import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class Track extends PureComponent {
  constructor(props) {
    super(props);
  }

  _getVariantElement() {
    return (
      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          defaultValue="answer-1"
          id="answer-3"
        />
        <label className="game__check" htmlFor="answer-3">
          Отметить
        </label>
      </div>
    );
  }

  render() {
    const {audioSrc, isVariant = false} = this.props;
    const variantElement = isVariant ? this._getVariantElement() : ``;

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
  isVariant: PropTypes.bool.isRequired
};

export default Track;
