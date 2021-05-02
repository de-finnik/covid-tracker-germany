import './App.css';
import Info from './components/Cards/Cards'
import {fetchData} from './api';
import React from 'react';

class App extends React.Component {
    state = {
        data: {},
        lastUpdate: '',
    };

    async componentDidMount() {
        const {data} = await fetchData();
        console.log(data);
        this.setState({data});
    }

    render() {
        return (
            <div className="App">
                <Info data={this.state.data} />
            </div>
        );
    }
}

export default App;
