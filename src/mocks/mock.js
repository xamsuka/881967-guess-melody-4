const questions = [
  {
    type: `artist`,
    song: {
      audioSrc: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      artist: `Пелагея`
    },
    artists: [
      {
        author: `Пелагея`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
      {
        author: `Моргенштерн`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
      {
        author: `Элджей`,
        imageSrc: `https://api.adorable.io/avatars/128`,
      },
    ]
  },
  {
    type: `genre`,
    genre: `rock`,
    audioSrc: [
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_541-fugue.ogg`
      },
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_542-fugue.ogg`
      },
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
      },
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_544-fugue.ogg`
      }
    ]
  }
];

const Settings = {
  ERROR_COUNT: 3,
};

export {questions, Settings};
