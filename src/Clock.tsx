import React from 'react';

export default class Clock extends React.Component<{}, { date: Date }> {
    timerID: number;
    constructor(props: any) {
        super(props)
        this.state = { date: new Date() };
        this.timerID = 0;
        this.tick = this.tick.bind(this)
    }
    componentDidMount() {
        this.timerID = window.setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        return <p>{this.state.date.toLocaleTimeString()}</p>
    }
}