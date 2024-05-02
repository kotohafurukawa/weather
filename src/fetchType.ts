type forecast = {
  date: Date;
  dateLabel: string;
  telop: string;
  detail: {
    weather: string;
    wind: string;
    wave: string;
  };
  temperature: {
    min: {
      celsius: string;
      fahrenheit: string;
    };
    max: {
      celsius: string;
      fahrenheit: string;
    };
  };
  chanceOfRain: {
    T00_06: string;
    T06_12: string;
    T12_18: string;
    T18_24: string;
  };
  image: {
    title: string;
    url: string;
    width: number;
    height: number;
  };
};

export type fetchType = {
  publicTime: Date;
  publicTimeFormatted: Date;
  publishingOffice: string;
  title: string;
  link: string;
  description: {
    publicTime: Date;
    publicTimeFormatted: Date;
    headlineText: string;
    bodyText: string;
    text: string;
  };
  forecasts: Array<forecast>;
  location: {
    area: string;
    prefecture: string;
    district: string;
    city: string;
  };
  copyright: {
    title: string;
    link: string;
    image: {
      title: string;
      link: string;
      url: string;
      width: number;
      height: number;
    };
    provider: [
      {
        link: string;
        name: string;
        note: string;
      }
    ];
  };
};
