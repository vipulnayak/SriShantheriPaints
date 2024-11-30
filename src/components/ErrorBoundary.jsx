import { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full bg-white rounded-lg shadow-xl p-8"
          >
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Oops!</h1>
              <p className="text-gray-600 mb-8">
                {this.state.error?.message || "Something went wrong. Please try again."}
              </p>
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-200"
                >
                  Go Home
                </Link>
                <button
                  onClick={() => window.location.reload()}
                  className="block w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  Try Again
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 