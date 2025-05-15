const COLORS = {
    temperature: [
        {min: -100 , max: -25, color: "#9f80ff"},
        {min: -25 , max: -20, color: "#784cff"},
        {min: -20 , max: -15, color: "#0f5abe"},
        {min: -15 , max: -10, color: "#1380ff"},
        {min: -10 , max: -5, color: "#19cdff"},
        {min: -5 , max: 0, color: "#8fffff"},
        {min: 0 , max: 5, color: "#b0ffbc"},
        {min: 5 , max: 10, color: "#ffff73"},
        {min: 10 , max: 15, color: "#ffbe7d"},
        {min: 15 , max: 20, color: "#ff9b41"},
        {min: 20 , max: 25, color: "#ff5a41"},
        {min: 25 , max: 30, color: "#ff1e23"},
        {min: 30 , max: 50, color: "#fa3c96"},
    ],
};

const COLORSSNOW = {
    snow: [
        {min: 0 , max: 0 , color: "white"},
        {min: 0 , max: 5, color: "#ffffb2"},
        {min: 5 , max: 10, color: "#b0ffbc"},
        {min: 10 , max: 20, color: "#8cffff"},
        {min: 20 , max: 30, color: "#19cdff"},
        {min: 30 , max: 50, color: "#1982ff"},
        {min: 50 , max: 75, color: "#0f5abe"},
        {min: 75 , max: 100, color: "#784bff"},
        {min: 100 , max: 600, color: "#cd0feb"},
    ],
};

const COLORSDR = {
    direction: [
        {min: 0 , max: 360, color: "#ffffb2"},
    ],
};

const COLORSWG = {
    windspeed: [
        {min: 0 , max: 5, color: "#ffff64"},
        {min: 5 , max: 10, color: "#c8ff64"},
        {min: 10 , max: 20, color: "#96ff96"},
        {min: 20 , max: 40, color: "#32c8ff"},
        {min: 40 , max: 60, color: "#6496ff"},
        {min: 60 , max: 80, color: "#9664ff"},
        {min: 80 , max: 500, color: "#ff3232"},
    ],
};