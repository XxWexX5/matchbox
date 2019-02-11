import React, {Component, Fragment} from 'react';

export default class People extends Component {
    negative = () => {
        const total = this.props.negative + this.props.positive;
        const negative = (this.props.negative * 100) / (total);
        return negative.toFixed(0);
    };

    positive = () => {
        const total = this.props.negative + this.props.positive;
        const positive = (this.props.positive * 100) / (total);
        return positive.toFixed(0);
    };

    render() {
        return (
            <Fragment>
                <div className="coluna-4 position-relative">
                    <img src={this.props.image} alt={`Avatar ${this.props.name}`}/>
                    <span className="index-rank">{this.props.rank + 1}</span>
                </div>

                <div className="coluna-8">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                </div>

                <div className="set-left"></div>

                <ul className="table-like">
                    <li>
                        <p className="title">Gostam</p>
                        <p className="percentage">{`${this.positive()} %`}</p>
                    </li>
                    <li>
                        <p className="title">Não Gostam</p>
                        <p className="percentage">{`${this.negative()} %`}</p>
                    </li>
                </ul>
            </Fragment>
        );
    }
}
