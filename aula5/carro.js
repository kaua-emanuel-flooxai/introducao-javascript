let carros = [
  "uno",
  "hb20",
  "bmw",
  "honda",
  "porsche",
  10,
  true,
  new Date(),
  function () {},
];

carros.forEach(function (value, index) {
  console.log(index, value);
});
