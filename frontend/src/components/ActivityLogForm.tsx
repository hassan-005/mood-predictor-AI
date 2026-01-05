// import { useState } from 'react';
// import { Moon, Footprints, Users, BookOpen, Smartphone, Sparkles } from 'lucide-react';

// interface FormData {
//   sleepTime: string;
//   steps: string;
//   socialInteractions: string;
//   studyTime: string;
//   screenTime: string;
// }

// interface MoodPrediction {
//   mood: string;
//   confidence: number;
//   message: string;
//   emoji: string;
// }

// export function ActivityLogForm() {
//   const [formData, setFormData] = useState<FormData>({
//     sleepTime: '',
//     steps: '',
//     socialInteractions: '',
//     studyTime: '',
//     screenTime: '',
//   });

//   const [prediction, setPrediction] = useState<MoodPrediction | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (field: keyof FormData, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     setPrediction(null);
//   };

//   const predictMood = (data: FormData): MoodPrediction => {
//     // Simulate mood prediction based on activity data
//     const sleep = parseFloat(data.sleepTime);
//     const steps = parseInt(data.steps);
//     const social = parseInt(data.socialInteractions);
//     const study = parseFloat(data.studyTime);
//     const screen = parseFloat(data.screenTime);

//     let score = 0;

//     // Sleep scoring (7-9 hours is optimal)
//     if (sleep >= 7 && sleep <= 9) score += 25;
//     else if (sleep >= 6 && sleep <= 10) score += 15;
//     else score += 5;

//     // Steps scoring
//     if (steps >= 10000) score += 25;
//     else if (steps >= 7000) score += 20;
//     else if (steps >= 5000) score += 15;
//     else score += 5;

//     // Social interactions scoring
//     if (social >= 5) score += 20;
//     else if (social >= 3) score += 15;
//     else if (social >= 1) score += 8;

//     // Study time scoring (2-5 hours is good)
//     if (study >= 2 && study <= 5) score += 15;
//     else if (study >= 1 && study <= 6) score += 10;
//     else score += 5;

//     // Screen time scoring (less is better)
//     if (screen <= 2) score += 15;
//     else if (screen <= 4) score += 10;
//     else if (screen <= 6) score += 5;

//     // Determine mood based on score
//     if (score >= 80) {
//       return {
//         mood: 'Excellent',
//         confidence: 92 + Math.random() * 7,
//         message: "You're having a fantastic day! Your activities show great balance and healthy habits. Keep it up!",
//         emoji: '😊'
//       };
//     } else if (score >= 60) {
//       return {
//         mood: 'Good',
//         confidence: 85 + Math.random() * 10,
//         message: "You're doing well today! A few small adjustments could make it even better.",
//         emoji: '🙂'
//       };
//     } else if (score >= 40) {
//       return {
//         mood: 'Fair',
//         confidence: 78 + Math.random() * 10,
//         message: "You're managing okay. Consider improving sleep, activity, or social connections for a mood boost.",
//         emoji: '😐'
//       };
//     } else {
//       return {
//         mood: 'Needs Attention',
//         confidence: 80 + Math.random() * 10,
//         message: "Your activities suggest you might benefit from more rest, movement, or social interaction.",
//         emoji: '😔'
//       };
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setPrediction(null);

//     // Simulate API call delay
//     await new Promise(resolve => setTimeout(resolve, 1500));

//     const result = predictMood(formData);
//     setPrediction(result);
//     setIsLoading(false);
//   };

//   const isFormValid = Object.values(formData).every(value => value !== '');

//   return (
//     <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100 p-6 md:p-8">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Sleep Time */}
//         <div className="group">
//           <label htmlFor="sleepTime" className="flex items-center gap-2 text-gray-700 mb-2">
//             <Moon className="w-5 h-5 text-indigo-500" />
//             <span>Sleep Time</span>
//           </label>
//           <div className="relative">
//             <input
//               id="sleepTime"
//               type="number"
//               min="0"
//               max="24"
//               step="0.5"
//               value={formData.sleepTime}
//               onChange={(e) => handleChange('sleepTime', e.target.value)}
//               placeholder="e.g., 7.5"
//               required
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-400 focus:outline-none transition-colors"
//             />
//             <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
//               hours
//             </span>
//           </div>
//           <p className="text-xs text-gray-500 mt-1 ml-1">Recommended: 7-9 hours</p>
//         </div>

//         {/* Number of Steps */}
//         <div className="group">
//           <label htmlFor="steps" className="flex items-center gap-2 text-gray-700 mb-2">
//             <Footprints className="w-5 h-5 text-green-500" />
//             <span>Number of Steps</span>
//           </label>
//           <input
//             id="steps"
//             type="number"
//             min="0"
//             value={formData.steps}
//             onChange={(e) => handleChange('steps', e.target.value)}
//             placeholder="e.g., 8000"
//             required
//             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:outline-none transition-colors"
//           />
//           <p className="text-xs text-gray-500 mt-1 ml-1">Goal: 10,000 steps daily</p>
//         </div>

//         {/* Social Interactions */}
//         <div className="group">
//           <label htmlFor="socialInteractions" className="flex items-center gap-2 text-gray-700 mb-2">
//             <Users className="w-5 h-5 text-purple-500" />
//             <span>Number of Social Interactions</span>
//           </label>
//           <input
//             id="socialInteractions"
//             type="number"
//             min="0"
//             value={formData.socialInteractions}
//             onChange={(e) => handleChange('socialInteractions', e.target.value)}
//             placeholder="e.g., 5"
//             required
//             className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
//           />
//           <p className="text-xs text-gray-500 mt-1 ml-1">Meaningful conversations count!</p>
//         </div>

//         {/* Study Time */}
//         <div className="group">
//           <label htmlFor="studyTime" className="flex items-center gap-2 text-gray-700 mb-2">
//             <BookOpen className="w-5 h-5 text-blue-500" />
//             <span>Study Time</span>
//           </label>
//           <div className="relative">
//             <input
//               id="studyTime"
//               type="number"
//               min="0"
//               max="24"
//               step="0.5"
//               value={formData.studyTime}
//               onChange={(e) => handleChange('studyTime', e.target.value)}
//               placeholder="e.g., 3"
//               required
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
//             />
//             <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
//               hours
//             </span>
//           </div>
//           <p className="text-xs text-gray-500 mt-1 ml-1">Focused learning time</p>
//         </div>

//         {/* Screen Time */}
//         <div className="group">
//           <label htmlFor="screenTime" className="flex items-center gap-2 text-gray-700 mb-2">
//             <Smartphone className="w-5 h-5 text-orange-500" />
//             <span>Screen Time</span>
//           </label>
//           <div className="relative">
//             <input
//               id="screenTime"
//               type="number"
//               min="0"
//               max="24"
//               step="0.5"
//               value={formData.screenTime}
//               onChange={(e) => handleChange('screenTime', e.target.value)}
//               placeholder="e.g., 4.5"
//               required
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors"
//             />
//             <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
//               hours
//             </span>
//           </div>
//           <p className="text-xs text-gray-500 mt-1 ml-1">Recreational screen time only</p>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={!isFormValid || isLoading}
//           className={`w-full py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
//             isFormValid && !isLoading
//               ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
//               : 'bg-gray-200 text-gray-400 cursor-not-allowed'
//           }`}
//         >
//           {isLoading ? (
//             <>
//               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//               <span>Analyzing Your Day...</span>
//             </>
//           ) : (
//             <>
//               <Sparkles className="w-5 h-5" />
//               <span>Predict My Mood</span>
//             </>
//           )}
//         </button>
//       </form>

//       {/* Prediction Result */}
//       {prediction && (
//         <div className="mt-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200 animate-fadeIn">
//           <div className="flex items-center gap-3 mb-4">
//             <span className="text-4xl">{prediction.emoji}</span>
//             <div>
//               <h3 className="text-indigo-900">
//                 Predicted Mood: <span className="text-indigo-600">{prediction.mood}</span>
//               </h3>
//               <p className="text-sm text-indigo-600">
//                 Confidence: {prediction.confidence.toFixed(1)}%
//               </p>
//             </div>
//           </div>
//           <p className="text-gray-700 leading-relaxed">
//             {prediction.message}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from 'react';
import { Moon, Footprints, Users, BookOpen, Smartphone, Sparkles } from 'lucide-react';

export function ActivityLogForm() {
  const [formData, setFormData] = useState({
    sleepTime: '',
    steps: '',
    socialInteractions: '',
    studyTime: '',
    screenTime: '',
  });

  interface Prediction {
    mood: string;
    confidence: number;
    emoji: string;
    message: string;
  }

  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setPrediction(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setPrediction(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sleep_hours: parseFloat(formData.sleepTime),
          steps: parseInt(formData.steps, 10),
          social_interactions: parseInt(formData.socialInteractions, 10),
          study_time: parseFloat(formData.studyTime),
          screen_time: parseFloat(formData.screenTime),
        }),
      });
      if (!response.ok) throw new Error('Prediction failed');
      
      const data = await response.json();

      type Mood = 'happy' | 'neutral' | 'stressed';

      const moodUIMap: Record<Mood, { emoji: string; message: string }> = {
        happy: {
          emoji: '😊',
          message: "You're feeling positive and balanced today. Keep maintaining these healthy habits!"
        },
        neutral: {
          emoji: '😐',
          message: "You're doing okay. A bit more rest or socialising could improve your mood."
        },
        stressed: {
          emoji: '😔',
          message: "It looks like you might be feeling stressed. Consider taking breaks and prioritizing self-care."
        }
      };

      const ui = moodUIMap[data.mood as Mood];

      setPrediction({
        mood: String(data.mood).toUpperCase(),
        confidence: data.confidence, // even if always 100
        emoji: ui.emoji,
        message: ui.message,
      });

    } catch (error) {
      console.log(error)
      setPrediction({
        mood: 'Error',
        confidence: 0,
        emoji: '⚠️',
        message: 'Unable to connect to the prediction server.',
      });
    } finally {
      setIsLoading(false);
    }
  };


  const isFormValid = Object.values(formData).every(value => value !== '');

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100 p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Sleep Time */}
        <div className="group">
          <label className="flex items-center gap-2 text-gray-700 mb-2">
            <Moon className="w-5 h-5 text-indigo-500" />
            <span>Sleep Time</span>
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.5"
              value={formData.sleepTime}
              onChange={(e) => handleChange('sleepTime', e.target.value)}
              placeholder="e.g., 7.5"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-400 focus:outline-none"
            />
            <span className="absolute px-4 right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              hours
            </span>
          </div>
        </div>

        {/* Steps */}
        <div className="group">
          <label className="flex items-center gap-2 text-gray-700 mb-2">
            <Footprints className="w-5 h-5 text-green-500" />
            <span>Steps</span>
          </label>          
          <input
            type="number"
            value={formData.steps}
            onChange={(e) => handleChange('steps', e.target.value)}
            placeholder="e.g., 8000"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:outline-none"
          />                      
        </div>

        {/* Social Interactions */}
        <div className="group">
          <label className="flex items-center gap-2 text-gray-700 mb-2">
            <Users className="w-5 h-5 text-purple-500" />
            <span>Social Interactions</span>
          </label>
          <input
            type="number"
            value={formData.socialInteractions}
            onChange={(e) => handleChange('socialInteractions', e.target.value)}
            placeholder="e.g., 5"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
          />
        </div>

        {/* Study */}
        <div className="group">
          <label className="flex items-center gap-2 text-gray-700 mb-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <span>Study Time</span>
          </label>
          <div className="relative">
          <input
            type="number"
            step="0.5"
            value={formData.studyTime}
            onChange={(e) => handleChange('studyTime', e.target.value)}
            placeholder="e.g., 3"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none"
          />
          <span className="absolute px-4 right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              hours
            </span>
            </div>
        </div>

        {/* Screen */}
        <div className="group">
          <label className="flex items-center gap-2 text-gray-700 mb-2">
            <Smartphone className="w-5 h-5 text-orange-500" />
            <span>Screen Time</span>
          </label>
          <div className="relative">
          <input
            type="number"
            step="0.5"
            value={formData.screenTime}
            onChange={(e) => handleChange('screenTime', e.target.value)}
            placeholder="e.g., 4.5"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none"
          />
          <span className="absolute px-4 right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              hours
            </span>
            </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all ${isFormValid && !isLoading
              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
              : 'bg-gray-200 text-gray-400'
            }`}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Analyzing Your Day...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Predict My Mood
            </>
          )}
        </button>
      </form>

      {/* Result */}
      {prediction && (
        <div className="mt-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{prediction.emoji}</span>
            <div>
              <h3 className="text-indigo-900">
                Predicted Mood: <span className="text-indigo-600">{prediction.mood}</span>
              </h3>
              <p className="text-sm text-indigo-600">
                Confidence: {prediction.confidence.toFixed(1)}%
              </p>
            </div>
          </div>
          <p className="text-gray-700">{prediction.message}</p>
        </div>
      )}
    </div>
  );
}
