import React, {Component, Fragment} from 'react';

import avatar from '../../images/avatar-marcel.png';

export default class People extends Component {
    render() {
        return (
            <Fragment>
                <div className="coluna-4 position-relative">
                    <img src={avatar} alt="Avatar"/>
                    <span className="index-rank">1</span>
                </div>
                <div className="coluna-8">
                    <h3>Marcel Vecelic</h3>
                    <p>Product Designer</p>
                </div>
                <ul className="table-like">
                    <li>
                        <p className="title">Gostam</p>
                        <p className="percentage">0%</p>
                    </li>
                    <li>
                        <p className="title">Não Gostam</p>
                        <p className="percentage">0%</p>
                    </li>
                </ul>
            </Fragment>
        );
    }
}
