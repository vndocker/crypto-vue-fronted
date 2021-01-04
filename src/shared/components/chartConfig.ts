export const chartConfig = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    styledMode: true
  },
  credits: false,
  defs: {
    linearGradient1: {
      id: "linear1",
      tagName: "linearGradient",
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "0%",
      children: [
        {
          tagName: "stop",
          offset: "0%",
          "stop-color": "#3bcad0"
        },
        {
          tagName: "stop",
          offset: "100%",
          "stop-color": "#2660cb"
        }
      ]
    },
    linearGradient2: {
      id: "linear2",
      tagName: "linearGradient",
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "0%",
      children: [
        {
          tagName: "stop",
          offset: "0%",
          "stop-color": "#3ecc09"
        },
        {
          tagName: "stop",
          offset: "100%",
          "stop-color": "#64df07"
        }
      ]
    }
  },
  tooltip: {
    pointFormat: "<b>{point.percentage:.1f}%</b>"
  },
  accessibility: {
    point: {
      valueSuffix: "%"
    }
  },
  plotOptions: {
    series: {
      states: {
        hover: {
          enabled: false
        }
      }
    },
    pie: {
      borderWidth: 5,
      dataLabels: {
        enabled: false,
        distance: -50,
        style: {
          fontWeight: "bold",
          color: "white"
        }
      },
      startAngle: 0,
      endAngle: 360,
      center: ["50%", "50%"],
      size: "100%"
    }
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          title: false,
          subtitle: false
        }
      }
    ]
  }
};
