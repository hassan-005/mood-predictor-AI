import { ActivityLogForm } from './components/ActivityLogForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-indigo-600 mb-3">Mood Predictor AI</h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Analyze your daily habits and build a healthier routine. Take a moment to log today's activities.
            </p>
          </div>

          {/* Form Card */}
          <ActivityLogForm />

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Consistent tracking helps you understand your patterns and make positive changes.
          </p>
        </div>
      </div>
    </div>
  );
}
