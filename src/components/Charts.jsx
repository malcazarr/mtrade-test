import { Line } from 'react-chartjs-2';
export const Charts = ({dataToGraph}) =>{
    let labels = []
    let montos = []
    
    dataToGraph.forEach(Item => {
        labels.push(Item.fecha)
        montos.push(parseFloat(Item.dato.replace(',','')))
    });

    const data = {
        labels: labels,
        datasets: [{
            data: montos,
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