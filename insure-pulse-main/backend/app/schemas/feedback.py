from pydantic import BaseModel


class FeedbackRequest(BaseModel):
    text: str


class FeedbackResponse(BaseModel):
    sentiment: str
    confidence: float
    topic: str
    priority: str
