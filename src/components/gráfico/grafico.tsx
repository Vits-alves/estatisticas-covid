import React, { useState } from 'react';
import { FC } from 'react';
import { Chart } from 'react-google-charts'

interface Props {
    titulo: string
    totalCasos: number
    recuperados: number
    totalMortes: number
}

const Grafico:FC<Props> = ({titulo, totalCasos, totalMortes, recuperados}) => {
    const [options, setOptions] = useState({ titulo: titulo })
    const [data, setData] = useState([
        ['Dado', 'Quantidade'],
        ['Total de casos', totalCasos],
        ['Recuperados', recuperados],
        ['Total de mortes', totalMortes]
    ])

    return (
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                data={data}
                options={options}
            />
        </div>
    )
}

export default Grafico