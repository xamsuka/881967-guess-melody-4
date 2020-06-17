import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import Artist from '../artist/artist.jsx';

class QuestionArtistScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {question: props.question, answer: ``};
  }

  render() {
    const {artists} = this.state.question;

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
                <div className="track">
                  <button
                    className="track__button track__button--play"
                    type="button"
                  />
                  <div className="track__status">
                    <audio />
                  </div>
                </div>
              </div>
              <form className="game__artist">

              </form>
            </section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

QuestionArtistScreen.propTypes = {
  question: PropTypes.any.isRequired,
};

export default QuestionArtistScreen;
