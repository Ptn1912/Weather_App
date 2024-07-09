type SearchInputProps= {
    cityName: string;
    setCityName: (cityName: string) => void;
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