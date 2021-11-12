import React from 'react';
import { Bar } from 'react-chartjs-2';
import { AverageMaleFemaleResponse } from '../../../services/customer/models';

interface Props {
    data: AverageMaleFemaleResponse
}

const VerticalBar: React.FC<Props> = ({data}) => {
    
    const barchart = data ? <Bar data={{
        labels: ["Hombres", "Mujeres"],
        datasets: [
          {
            label: 'Promedio de edades por género',
            data: [
                data.male.avg,
                data.female.avg
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
    }} options={{ title: { position: "top", display: true, text: 'Promedio de edades por género', fontStyle: "bold", fontSize: 12 }}} /> : null

    return (
      <div className="chart_container">
        {barchart}
      </div>
    )

};

export default VerticalBar;