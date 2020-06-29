import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Track from "../track/track.jsx";
import {GameType} from '../../const.js';

class QuestionGenreScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {answer: [false, false, false, false], activePlayer: -1};
  }

  render() {
    const {question, onAnswerButtonSubmit} = this.props;
    const {audioSrc} = question;

    const trackElements = audioSrc.map((audio, index) => {
      return <Track audioSrc = {audio.src} isPlaying = {this.state.activePlayer === index ? true : false} questionType = {GameType.GENRE} indexTrack = {index} key = {audio.src} onPlayButtonClick = {(index) => {
        this.setState({
          activePlayer: this.state.activePlayer === index ? -1 : index,
        });
      }} />;
    });

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks" onSubmit={onAnswerButtonSubmit}>
          {trackElements}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
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
