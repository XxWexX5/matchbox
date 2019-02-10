import React, {Component} from 'react';

import '../utilities/grid.scss';
import './style/App.scss';

import logo from '../../images/logo_matchbox.png';

import People from '../People';

class App extends Component {
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
                            <li className="container">
                                <People />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
