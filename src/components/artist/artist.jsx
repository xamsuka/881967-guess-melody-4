import React from "react";
import PropTypes from "prop-types";

const Artist = ({author, imageSrc, indexAnswer}) => {
  return (
    <div className="artist">
      <input
        className="artist__input visually-hidden"
        type="radio"
        name="answer"
        defaultValue={indexAnswer}
        id={indexAnswer}
      />
      <label className="artist__name" htmlFor={indexAnswer}>
        <img className="artist__picture" src={imageSrc} alt={author} />
        {author}
      </label>
    </div>
  );
};

Artist.propTypes = {
  author: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  indexAnswer: PropTypes.string.isRequired,
};

export default Artist;
