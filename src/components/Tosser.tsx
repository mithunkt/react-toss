import * as React from 'react';

export default class Tosser extends React.Component<{}, { result: string }> {
    constructor(props: any) {
        super(props);
        this.toss = this.toss.bind(this);
        this.state = { result: '' };
    }

    public render() {
        return (
            <div className="tosser">
                <div className="toss-result">{this.state.result}</div>
                <button onClick={this.toss}>TOSS</button>
            </div>
        );
    }

    public toss() {
        const random = Math.floor(Math.random() * 500) + 100;
        this.setState(state => ({
            result: (random > 250 ? 'Head' : 'Tail')
        }));
    }
}