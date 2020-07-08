import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';
import GameScreen from '../game-screen/game-screen.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist/question-artist.jsx';
import QuestionGenreScreen from '../question-genre/question-genre.jsx';
import widthTrack from '../../hocs/with-track';
import {ActionCreator} from '../../reducer.js';
import {GameType} from '../../const';

const QuestionArtistScreenWrapped = widthTrack(QuestionArtistScreen);
const QuestionGenreScreenWrapped = widthTrack(QuestionGenreScreen);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {errorsCount, questions, step, onWelcomeButtonClick, onAnswerButtonClick} = this.props;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return <WelcomeScreen errorsCount = {errorsCount} onWelcomeButtonClick = {onWelcomeButtonClick} />;
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return <GameScreen type = {GameType.ARTIST}>
            <QuestionArtistScreenWrapped question = {question} onAnswerButtonClick = {onAnswerButtonClick} />
          </GameScreen>;

        case GameType.GENRE:
          return <GameScreen type = {GameType.GENRE}>
            <QuestionGenreScreenWrapped question = {question} onAnswerButtonSubmit = {onAnswerButtonClick} />
          </GameScreen>;
      }
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen errorsCount = {errorsCount} onWelcomeButtonClick = {onWelcomeButtonClick} />;
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtistScreenWrapped question = {question} onAnswerButtonClick = {onAnswerButtonClick} />
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenreScreenWrapped question = {question} onAnswerButtonSubmit = {onAnswerButtonClick} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onAnswerButtonClick: PropTypes.func.isRequired,
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },

  onAnswerButtonClick(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistakes(question, answer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

