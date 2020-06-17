import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist/question-artist.jsx';
import QuestionGenreScreen from '../question-genre/question-genre.jsx';

const GameScreen = {
  Welcome: `welcome`,
  Artist: `artist`,
  Genre: `genre`
};

const welcomeButtonHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {errorsCount: 3, screen: GameScreen.Artist, questions: props.questions};
  }

  render() {
    let screen = null;

    console.log(this.state.questions)

    switch (this.state.screen) {
      case GameScreen.Welcome:
        screen = <WelcomeScreen errorsCount = {this.state.errorsCount} onWelcomeButtonClick = {welcomeButtonHandler} />;
        break;
      case GameScreen.Artist:
        screen = <QuestionArtistScreen question = {this.state.questions[0]} />;
        break;
      case GameScreen.Genre:
        screen = <QuestionGenreScreen />;
        break;
    }

    // if (this.state.screen === GameScreen.Welcome) {
    //   screen = <WelcomeScreen errorsCount = {this.state.errorsCount} onWelcomeButtonClick = {welcomeButtonHandler}/>;
    // }

    return screen;
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;


