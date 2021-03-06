import React from 'react';
import { Pie } from 'react-chartjs-2';
import { AverageMaleFemaleResponse } from '../../../services/customer/models';

interface Props {
    data: AverageMaleFemaleResponse
}

const PieChart: React.FC<Props> = ({data}) => {

    const pie = data ? <Pie data={{
        labels: ['Hombres', 'Mujeres'],
        datasets: [
            {
            label: 'Número de clientes por género',
            data: [data.male.count, data.female.count],
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
    }} options={{ title: { position: "top", display: true, text: "Cantidad de clientes por género", fontStyle: "bold", fontSize: 12 }}} /> : null;

    return (
        <div className="chart_container">
            {pie}
        </div>
    )
  
};

export default PieChart;