type SearchInputProps= {
    city: string;
    setCity: (city: string) => void;
    fetchWeather: () => void;
  }
  type Props= {
    weather: {
        name: string;
        main: {
          temp: number;
        };
        weather: [
          {
            description: string;
          }
        ];
      };
    getIconImage: () => any;
  }