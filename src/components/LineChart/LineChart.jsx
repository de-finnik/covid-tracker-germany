import React from 'react';
import { Line } from 'react-chartjs-2';

function getLabels(list) {
  var labels = []
  for (var i = 0; i<list.length; i++) {
    var date = new Date(list[i].date)
    labels.push(date.toLocaleDateString())
  }
  return labels
}

function getCases(list) {
  var labels = []
  for (var i = 0; i<list.length; i++) {
    var date = list[i].cases
    labels.push(date)
  }
  return labels
}

const options = {
  
};

const styles = {
  width: '50%',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '100px'
}

const LineChart = ({data}) => {
  if(!data) {
    return (<h1>Loading</h1>)
  }
  const chart = {
    labels: getLabels(data.data),
    datasets: [
      {
        label: 'Cases',
        color: 'rgb(255, 0, 0)',
        borderColor: 'rgb(255, 0, 0)',
        fill: false,
        radius: 2,
        tooltip: false,
        data: getCases(data.data)
      }
    ]

  }
  return (
    <div style={styles}>
      <Line data={chart} options={options} />
    </div>
  )
};

export default LineChart;