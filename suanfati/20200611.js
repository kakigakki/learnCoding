/*  Each morning a man walks to work, and each afternoon he walks back home.

If it is raining in the morning and he has an umbrella at home,
he takes an umbrella for the journey so he doesn't get wet, 
and stores it at work. Likewise, if it is raining in the afternoon and he has an umbrella at work, 
he takes an umbrella for the journey home.

Given an array of the weather conditions,
your task is to work out the minimum number of umbrellas he needs 
to start with in order that he never gets wet. 
He can start with some umbrellas at home and some at work, 
but the output is a single integer, the minimum total number.

The input is an array/list of consecutive half-day weather forecasts.
So, e.g. the first value is the 1st day's morning weather and the second value 
is the 1st day's afternoon weather. 
The options are "clear", "sunny", "cloudy", "rainy", "windy" or "thunderstorms".
 */

function minUmbrellas(weather) {
    let home = 0;
    let office = 0;
    for (let i = 0; i < weather.length; i++) {
        if (["thunderstorms", "rainy"].includes(weather[i])) {
            if (i % 2) {
                if (office) {
                    office--;
                }
                home++;
            } else {
                if (home) {
                    home--;
                }
                office++;
            }
        }
    }
    return home + office;
}

console.log(
    minUmbrellas([
        "thunderstorms",
        "cloudy",
        "cloudy",
        "thunderstorms",
        "rainy",
        "thunderstorms",
        "sunny",
        "rainy",
        "cloudy",
        "sunny",
    ])
);