# Backend

FastAPI service exposing the InsurePulse customer feedback analysis API. See [docs/expected-api.md](../docs/expected-api.md) for the full contract.

## Layout

```
backend/
└── app/
    ├── main.py            FastAPI app, router registration
    ├── api/                Route handlers (health, feedback)
    ├── schemas/            Pydantic request/response models
    └── services/           Business logic (prediction.py wires in the ML models)
```

## Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate      # Windows
# source .venv/bin/activate # macOS/Linux
pip install -r requirements.txt
```

## Run the dev server

```bash
fastapi dev app/main.py
```

Serves on `http://localhost:8000`. Interactive docs at `http://localhost:8000/docs`.

## Tests

```bash
pytest
```

## Continuing work

- `services/prediction.py` currently returns a mocked response — replace it with calls into the trained models from [../ml](../ml) once available.
- Add new endpoints under `app/api/`, register the router in `main.py`, define request/response shapes in `app/schemas/`, and keep [docs/expected-api.md](../docs/expected-api.md) up to date.
