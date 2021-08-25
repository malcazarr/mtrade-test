import { Line } from 'react-chartjs-2';
export const Charts = (props) =>{

    const data = {
        labels: ['01/01/2019', '01/02/2019'],
        datasets: [{
            data: [11454.6, 11,454.6],
            backgroundColor: "#FFFFFF",
            borderColor: "#FFFFFF",
            borderWidth: 2
        }]
    }
    const options = { 
        maintainAspectRatio: true,
        plugins: {
            legend: {
              display: false
            }
        },
        scales:{
            y:{
                title:{
                    color: "#FFFFFF"
                },
                grid:{
                    borderColor: "#202837",
                    borderDash: 0
                },
            },
            x:{
                grid:{
                    borderColor: "#FFFFFF",
                    borderDash: 0
                }
            }
        }   
    }
    return (
        <div style={{height: "200px"}}>
            <Line height={50} data={data} options={options}/>
        </div>

    )

}