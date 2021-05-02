import './App.css';
import Info from './components/Cards/Cards'
import {fetchData, fetchHistory} from './api';
import React from 'react';
import LineChart from './components/LineChart/LineChart'

class App extends React.Component {
    state = {
        data: {},
        history: {}
    };

    async componentDidMount() {
        const {data} = await fetchData();
        const history = await fetchHistory();
        this.setState({data, history});
        console.log(this.state)
    }

    render() {
        return (
            <div className="App">
                <Info data={this.state.data} />
                <LineChart data={this.state.history.cases} style={{width: '50%'}}/>
            </div>
        );
    }
}

export default App;
