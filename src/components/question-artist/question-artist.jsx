import React from "react";
import PropTypes from 'prop-types';
import Artist from '../artist/artist.jsx';

const QuestionArtistScreen = (props) => {
  const {question, onAnswerButtonClick, renderTrack} = props;
  const {artists, song} = question;
  const {audioSrc} = song;

  const artistElements = artists.map((artist, index) => {
    return <Artist
      author={artist.author}
      imageSrc={artist.imageSrc}
      indexAnswer = {`answer-${index}`}
      key={artist.author}
    />;
  });

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        {renderTrack(audioSrc, 0)}
      </div>
      <form className="game__artist" onClick={(evt) => {
        const answer = evt.target.parentElement.textContent;
        onAnswerButtonClick(question, answer);
      }}>
        {artistElements}
      </form>
    </section>
  );
};

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
  renderTrack: PropTypes.func.isRequired,
};

export default QuestionArtistScreen;
