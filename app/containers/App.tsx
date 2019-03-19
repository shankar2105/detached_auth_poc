import * as React from 'react';

interface Props {
    children: React.ReactChild;
}
export class App extends React.Component<{}, {}> {
    props: Props;

    render() {
        const { children } = this.props;
        return <React.Fragment>{children}</React.Fragment>;
    }
}
