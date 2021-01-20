import React from 'react'
import Chart from 'chart.js'
import axios from 'axios'

import './TicketAnalysis.css'

/**
 * Show: Number of tickets, date, status (resolved or not), 
 * 
 */

class TicketAnalysis extends React.Component{
    chartRef = React.createRef();


    constructor(props){
        super(props)

        this.state = {
            dataset : [],
            labels :  []
           

        }
       
    }

    componentDidMount(){
        axios.get('http://localhost:3000/getChartData', {withCredentials: true})
        .then((chartData) => {
            const _data = chartData.data;
            //temp. date array
            const _labels = []
            // temp data arrays
            const _pendingData = {label : 'Pending',backgroundColor: 'red',maxBarThickness: 5,data : []}
            const _resolvedData = {label : 'Resolved',backgroundColor: 'green' ,maxBarThickness: 5,data : [3]}

            
            _data.forEach(item => {
                _labels.push(item.date)
                _pendingData.data.push(item.pending)
                _resolvedData.data.push(item.resolved)
            })

            const _dataSet = []
            _dataSet.push(_pendingData, _resolvedData)
           

            this.setState({
                labels : _labels,
                dataset : _dataSet
                
            })
            
            console.log(this.state.dataset)
        })
        .then(() => {
            new Chart(myChartRef, {
                type : 'bar',
                data : {
                    labels : this.state.labels,
                    datasets : this.state.dataset,
                },
                options : {
                    


                    scales : {
                        yAxes : [{
                            ticks : {
                                beginAtZero : true,
                                stepSize: 1,

                            }
                        }],
                        xAxes : [{
                            gridLines:{
                              
                            },
                            ticks: {
                                labelOffset: false,
                                stepSize: 1,
                                fixedStepSize: 1,
                            
                            }
                            

                        }]
                    }
                }
           })

        })
        .catch((err) => {
            console.log(err)
        })

       const myChartRef = this.chartRef.current.getContext('2d');

      







    }

    render(){
        return(
            <div className='_container'>
                <canvas className="graphBox" id ref={this.chartRef} />
            </div>
        )
    }
}

export default  TicketAnalysis