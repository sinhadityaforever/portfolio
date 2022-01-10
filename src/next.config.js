module.exports = {
  async redirects() {
    return [
      {
        source: "/Resume",
        destination:
          "https://drive.google.com/file/d/1OFqUcr01eUPToXU7t3U3lJJgVQxJRt5b/view?usp=sharing",
        permanent: true,
      },
    ];
  },
};
