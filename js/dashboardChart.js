const earn = document.getElementById("earn_week").getContext("2d");
const earn_year = document.getElementById("earn_year").getContext("2d");

const earnChart = new Chart(earn, {
  type: "doughnut",
  data: {
    labels: [
      "Facebook",
      "Google AdSense",
      "YouTube",
      "Instagram",
      "Affliate Marketing",
    ],
    datasets: [
      {
        label: "Revenue",
        data: ["3567", "5118", "1121", "2312", "3052"],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
        ],
      },
    ],
  },
});

const earnYear = new Chart(earn_year, {
  type: "line",
  data: {
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Revenue(NU)",
        data: [2354, 3412, 5043, 7803, 8211],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    beginAtZero: true,
  },
});
