from fastapi import FastAPI

from app.api.health import router as health_router
from app.api.feedback import router as feedback_router

app = FastAPI(
    title="InsurePulse API",
    description="Customer Feedback Intelligence API",
    version="0.1.0",
)

app.include_router(health_router)
app.include_router(feedback_router)
