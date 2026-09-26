from app.schemas.feedback import FeedbackResponse


def analyze_feedback(text: str) -> FeedbackResponse:
    # Temporary mock implementation.
    # This will later be replaced by the actual ML Pipeline.

    return FeedbackResponse(
        sentiment="negative", confidence=0.94, topic="Claim Delays", priority="high"
    )
