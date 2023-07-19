TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  [
    {
      x: ['red', 'green', 'blue', 'pink', 'cyan','yellow','orange','deep red','ir1','ir2','ir3', 'ir4'],
      y: [
        25.17680339,
        56.93512304,
        48.16870144,
        34.61139896,
        30.72429907,
        36.29124005,
        52.71226415,
        60.20539153,
        92.26804124,
        112.0930233,
        118.4247539
      ]
    }
  ],
  {
    margin: { t: 0 }
  }
);
