from fastapi import APIRouter

from app.schemas.feedback import FeedbackRequest, FeedbackResponse
from app.services.prediction import analyze_feedback

router = APIRouter(prefix="/api/v1", tags=["Feedback"])


@router.post("/analyze", response_model=FeedbackResponse)
def analyze(request: FeedbackRequest):
    """
    Analyze the feedback text and return the sentiment, confidence, topic, and priority.
    """
    return analyze_feedback(request.text)
