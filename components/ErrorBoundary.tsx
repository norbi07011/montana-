import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-montana-black flex items-center justify-center px-4">
          <div className="glass-panel p-8 max-w-md text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-serif text-white mb-4">Er is iets misgegaan</h1>
            <p className="text-slate-400 mb-6">
              We hebben een technisch probleem ondervonden. Probeer de pagina opnieuw te laden.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Pagina Herladen
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
