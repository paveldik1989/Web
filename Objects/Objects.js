(function () {
        var country1 = {
            countryName: "Russia",
            cities: [{
                cityName: "Novosibirsk",
                population: 1000000
            }, {
                cityName: "Moscow",
                population: 10000000
            }]
        }

        var country2 = {
            countryName: "USA",
            cities: [{
                cityName: "Washington",
                population: 2000000
            }, {
                cityName: "New York",
                population: 20000000
            }]
        }

        var country3 = {
            countryName: "France",
            cities: [{
                cityName: "Paris",
                population: 20000000
            }, {
                cityName: "Lyon",
                population: 2000000
            },
                {
                    cityName: "Marsel",
                    population: 20000
                }]
        }

        var countries = [country1, country2, country3];
        console.log("Список стран:");
        console.log(countries);

        function getCountriesWithHighestCitiesAmount(countries) {
            var result = [];
            result.push(countries[0]);
            for (var i = 1; i < countries.length; i++) {
                if (countries[i].cities.length === result[0].cities.length) {
                    result.push(countries[i]);
                } else if (countries[i].cities.length > result[0].cities.length) {
                    result = [];
                    result.push(countries[i]);
                }
            }

            return result;
        }

        console.log("Страны в которых наибольшее количество городов: ");
        console.log(getCountriesWithHighestCitiesAmount(countries));

        function getPopulations(countries) {
            var result = [];

            for (var country of countries) {
                var population = 0;

                for (var city of country.cities) {
                    population += city.population;
                }

                result.push({
                    countryName: country.countryName,
                    population: population
                })
            }

            return result;
        }

        console.log("Население стран: ");
        console.log(getPopulations(countries));
    }
)()