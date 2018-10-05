import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
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
                <div className="toss-action">
                    <CircularProgress size={75} style={{ color: '#d409f7' }} />
                    <Button color="primary" variant="raised" onClick={this.toss}>TOSS</Button>
                </div>
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