import * as React from 'react';

export default class Tosser extends React.Component<{}, { result: string, reset: boolean, tossing: boolean }> {
    constructor(props: any) {
        super(props);
        this.toss = this.toss.bind(this);
        this.state = { result: '', reset: false, tossing: false };
    }

    public render() {
        return (
            <div className="tosser">
                <div className="toss-result">{this.state.result}</div>
                <div className="toss-trigger">
                    <button className={this.state.tossing? "spin" : ""} onClick={this.toss}>{ this.state.reset? 'RESET': 'TOSS' }</button>
                </div>
            </div>
        );
    }

    public toss() {
        if(this.state.reset) {
            this.setState({ result: '', reset: false, tossing: false})
        } else {
            const random = Math.random() >= 0.5;
            this.setState(state => ({ result: '', reset: false, tossing: true}))
            setTimeout(() => {
                this.setState(state => ({
                    reset: true,
                    result: (random  ? 'Head' : 'Tail'),
                    tossing: false
                }));
            }, 1000);
        }
    }
}