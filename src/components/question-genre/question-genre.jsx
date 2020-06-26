import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Track from "../track/track.jsx";
import {TRACK_VARIANT} from '../../const.js';

class QuestionGenreScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {answer: [false, false, false], activePlayer: 0};
  }

  render() {
    const {question, onAnswerButtonSubmit} = this.props;
    const {audioSrc} = question;

    const trackElements = audioSrc.map((audio, index) => {
      return <Track audioSrc = {audio.src} questionType = {TRACK_VARIANT.GENRE} indexTrack = {index} key = {audio.src} onPlayButtonClick = {() => {
        this.setState({
          activePlayer: index,
        });
      }} />;
    });

    return (
      <React.Fragment>
        <section className="game game--genre">
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
            <h2 className="game__title">Выберите инди-рок треки</h2>
            <form className="game__tracks" onSubmit={onAnswerButtonSubmit}>
              {trackElements}

              <button className="game__submit button" type="submit">Ответить</button>
            </form>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

QuestionGenreScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    audioSrc: PropTypes.arrayOf(PropTypes.shape({
      genre: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }))
  }).isRequired,
  onAnswerButtonSubmit: PropTypes.func.isRequired,
};

export default QuestionGenreScreen;
