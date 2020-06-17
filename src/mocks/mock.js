const questions = [
  {
    type: `artist`,
    audioSrc: ``,
    artists: [
      {
        author: `Пелагея`,
        imageSrc: `https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&tbm=isch&tbs=isz%3Ai&hl=ru&ved=0CAMQpwVqFwoTCNiKoJDfiOoCFQAAAAAdAAAAABAC&biw=1903&bih=969#imgrc=H5FJ25LHUmKX7M`,
      },
      {
        author: `Моргенштерн`,
        imageSrc: `https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&tbm=isch&tbs=isz%3Ai&hl=ru&ved=0CAMQpwVqFwoTCNiKoJDfiOoCFQAAAAAdAAAAABAC&biw=1903&bih=969#imgrc=pjl49BazVwOefM`,
      },
      {
        author: `Элджей`,
        imageSrc: `https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&tbm=isch&tbs=isz%3Ai&hl=ru&ved=0CAMQpwVqFwoTCNiKoJDfiOoCFQAAAAAdAAAAABAC&biw=1903&bih=969#imgrc=OfiT-GYgcgu_KM`,
      },
    ]
  },
  {
    type: `genre`,
    genre: `rock`,
    audioSrc: [
      {
        genre: `rock`,
        src: `...`
      },
      {
        genre: `rock`,
        src: `...`
      },
      {
        genre: `rock`,
        src: `...`
      },
      {
        genre: `rock`,
        src: `...`
      }
    ]
  },
  {
    type: `artist`,
    audioSrc: ``,
    artists: [
      {
        author: ``,
        imageSrc: ``,
      },
      {
        author: ``,
        imageSrc: ``,
      },
      {
        author: ``,
        imageSrc: ``,
      },
    ]
  },
];

const Settings = {
  ERROR_COUNT: 3,
};

export {questions, Settings};
