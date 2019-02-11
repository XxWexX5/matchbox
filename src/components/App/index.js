import React, {Component} from 'react';
import api from '../../services/api';

import '../utilities/grid.scss';
import './style/App.scss';

import logo from '../../images/logo_matchbox.png';

import People from '../People';

class App extends Component {
    state = {
        peoples: []
    };

    componentDidMount() {
        this.loadPeoples();
    }

    loadPeoples = async () => {
        const response = await api;

        this.setState({peoples: response.data.data});

        console.log(this.state.peoples);
    };

    render() {
        return (
            <div className="app">
                <div className="ranking">
                    <div className="content-logo">
                        <img src={logo} alt="Logo MatchBox"/>
                    </div>
                    <div className="content-ranking">
                        <div className="ranking-header">
                            <h2>ranking</h2>
                        </div>
                        <ul className="ranking-body">
                            {this.state.peoples.map((people, index) => (
                                <li className="container" key={index}>
                                    <People name={people.name} description={people.description} image={people.picture}
                                            rank={index} negative={people.negative} positive={people.positive} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
