import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import Artist from '../artist/artist.jsx';
import Track from '../track/track.jsx';
import {TRACK_VARIANT} from '../../const.js';

class QuestionArtistScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {question, onAnswerButtonClick} = this.props;
    const {artists, song} = question;
    const {audioSrc} = song;

    const artistElements = artists.map((artist, index) => {
      return <Artist author={artist.author} imageSrc={artist.imageSrc} indexAnswer = {`answer-${index}`} key={artist.author} />;
    });

    const trackElement = <Track audioSrc = {audioSrc} questionType = {TRACK_VARIANT.ARTIST} />;

    return (
      <React.Fragment>
        <section className="main" id="root">
          <section className="game game--artist">
            <header className="game__header">
              <a className="game__back" href="#">
                <span className="visually-hidden">Сыграть ещё раз</span>
                <img
                  className="game__logo"
                  src="img/melody-logo-ginger.png"
                  alt="Угадай мелодию"
                />
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="timer"
                viewBox="0 0 780 780"
              >
                <circle
                  className="timer__line"
                  cx={390}
                  cy={390}
                  r={370}
                  style={{
                    filter: `url(#blur)`,
                    transform: `rotate(-90deg) scaleY(-1)`,
                    transformOrigin: `center`,
                  }}
                />
              </svg>
              <div className="game__mistakes">
                <div className="wrong" />
                <div className="wrong" />
                <div className="wrong" />
              </div>
            </header>
            <section className="game__screen">
              <h2 className="game__title">Кто исполняет эту песню?</h2>
              <div className="game__track">
                {trackElement}
              </div>
              <form className="game__artist" onClick={onAnswerButtonClick}>
                {artistElements}
              </form>
            </section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

QuestionArtistScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      audioSrc: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }).isRequired,
    artists: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })).isRequired
  }),
  onAnswerButtonClick: PropTypes.func.isRequired,
};

export default QuestionArtistScreen;
