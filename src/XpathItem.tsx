import React, { MouseEvent } from "react";

export default class XpathItem extends React.Component<{}, { display: string }> {
    constructor(props: any) {
        super(props)
        this.state = { display: "block" }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e: MouseEvent) {
        e.preventDefault();
        this.setState({ display: "none" })
        console.log("item clicked")
    }
    render() {
        return <li onClick={this.handleClick} style={{ display: this.state.display }}> this is a xpath item</li >
    }
}