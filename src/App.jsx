import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Suspense } from 'react';
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Suspense 
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
