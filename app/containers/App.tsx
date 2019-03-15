
import * as React from "react";

interface Props {
    children: React.Node
}
export class App extends React.Component<{}, {}> {
    props: Props;

    render() {
        const { children } = this.props;
        return <React.Fragment>{children}</React.Fragment>;
    }
}
