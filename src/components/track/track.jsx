import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class Track extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {audioSrc} = this.props;
    return (
      <div className="track">
        <button className="track__button track__button--play" type="button" />
        <div className="track__status">
          <audio src={audioSrc} />
        </div>
      </div>
    );
  }
}

Track.propTypes = {
  audioSrc: PropTypes.string.isRequired,
};

export default Track;
