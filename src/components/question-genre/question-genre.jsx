import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class QuestionGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answer: [false, false, false, false],
    };
  }

  render() {
    const {question, onAnswerButtonSubmit, renderTrack} = this.props;
    const {audioSrc} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks" onSubmit={onAnswerButtonSubmit}>
          {audioSrc.map((audio, index) => {
            return <div className="track" key={audio.src}>
              {renderTrack(audio.src, index)}
              <div className="game__answer">
                <input
                  className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  value={`answer-${index}`}
                  id={`answer-${index}`}
                />
                <label className="game__check" htmlFor={`answer-${index}`}>
                  Отметить
                </label>
              </div>
            </div>;
          })}

          <button className="game__submit button" type="submit">
            Ответить
          </button>
        </form>
      </section>
    );
  }
}

QuestionGenreScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    audioSrc: PropTypes.arrayOf(
        PropTypes.shape({
          genre: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired,
        })
    ),
  }).isRequired,
  onAnswerButtonSubmit: PropTypes.func.isRequired,
  renderTrack: PropTypes.func.isRequired,
};

export default QuestionGenreScreen;
