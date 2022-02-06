import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error on ErrorBoundary: ', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <h3>Sorry.. there was an error</h3>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
