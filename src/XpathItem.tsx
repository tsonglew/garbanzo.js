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
        chrome.devtools.panels.elements.createSidebarPane("My Sidebar",
            function (sidebar) {
                // sidebar initialization code here
                sidebar.setPage("sidebar.html");
                sidebar.setHeight("8ex");
            });

        chrome.tabs.getSelected((t: chrome.tabs.Tab) => {
            if (!t.id) { return }
            chrome.tabs.executeScript(t.id, { code: "'selected'" }, (x) => {
            })
        })

    }
    render() {
        return <li onClick={this.handleClick} style={{ display: this.state.display }}> this is a xpath item</li >
    }
}