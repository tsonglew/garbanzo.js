export default class ConnManager {
    connections: { [key: string]: chrome.runtime.Port; };

    constructor() {
        this.connections = {}
    }

    add(tabId: string, port: chrome.runtime.Port) {
        this.connections[tabId] = port
    }

    del(tabId: string) {
        delete this.connections[tabId]
    }

    delByPort(port: chrome.runtime.Port) {
        let tabs = Object.keys(this.connections);
        for (let i = 0, len = tabs.length; i < len; i++) {
            if (this.connections[tabs[i]] === port) {
                delete this.connections[tabs[i]];
                break;
            }
        }
    }

    get(tabId: string) {
        return this.connections[tabId]
    }

    has(tabId: string) {
        return tabId in this.connections
    }

    post(tabId: string, request: any): boolean {
        if (!this.has(tabId)) {
            return false
        }
        this.connections[tabId].postMessage(request);
        return true
    }
}