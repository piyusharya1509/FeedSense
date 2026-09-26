# InsurePulse API Contract

## POST /api/v1/analyze

> Analyze a single customer feedback.

### Request

```json
{
    "text": "My claim has been pending for three weeks."
}
```

### Response

```json
{
    "sentiment": "negative",
    "confidence": 0.94,
    "topic": "claim_delay",
    "priority": "high"
}
```

## POST /api/v1/analyze/file

> Analyze uploaded CSV/Excel feedback.

### Request

```json
<Multipart file upload>
```

### Response

```json
{
    "total": 1000,
    "summary": {
        "positive": 420,
        "neutral": 210,
        "negative": 370
    },
    "high_priority": 87,
    "topics": ["Claim Delays", "Premium Issues", "Customer Service"]
}
```

## GET /api/v1/health

### Response

```json
{
    "status": "ok"
}
```
