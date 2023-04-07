module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  theme: {
    extend: {
      spacing: {
        'medium-size-page': '32rem'
      },
      aspectRatio: {
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [],
};
