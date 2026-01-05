from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

# -----------------------
# Load trained pipeline
# -----------------------
pipeline = joblib.load("mood_prediction_pipeline.pkl")

app = FastAPI(title="Mood Prediction API")

# -----------------------
# Input schema
# -----------------------
class MoodInput(BaseModel):
    sleep_hours: float
    steps: int
    social_interactions: int
    study_time: float
    screen_time: float

# -----------------------
# Prediction endpoint
# -----------------------
@app.post("/predict")
def predict_mood(data: MoodInput):
    # Arrange features EXACTLY in training order
    features = np.array([[
        data.sleep_hours,
        data.steps,
        data.social_interactions,
        data.study_time,
        data.screen_time
    ]])

    # Predict mood
    prediction = pipeline.predict(features)[0]

    response = {
        "mood": str(prediction)
    }

    # Confidence if model supports predict_proba
    if hasattr(pipeline, "predict_proba"):
        probs = pipeline.predict_proba(features)[0]
        confidence = float(np.max(probs))
        response["confidence"] = round(confidence * 100, 2)

    return response


from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://mood-predictor-ai.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
