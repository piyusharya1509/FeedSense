# Insure Pulse

Customer Feedback Intelligence platform for insurance companies — analyzes customer feedback for sentiment, topic, and priority.

## Project layout

```
insure-pulse/
├── backend/    FastAPI service exposing the analysis API
├── frontend/   React + Vite + TypeScript UI
├── ml/         Notebooks and source for sentiment/topic/priority models
├── data/       Raw and processed datasets (not committed)
└── docs/       API contract and other reference docs
```

Each subfolder has its own README with more detail:
[backend/README.md](backend/README.md), [frontend/README.md](frontend/README.md), [ml/README.md](ml/README.md), [data/README.md](data/README.md).

## Prerequisites

- Python 3.11+
- [Bun](https://bun.sh) (frontend package manager/runtime)
- Git

## Quickstart: run the full dev environment

Open two terminals — one for the backend, one for the frontend.

**Backend** (FastAPI on `http://localhost:8000`):

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate      # Windows
# source .venv/bin/activate # macOS/Linux
pip install -r requirements.txt
fastapi dev app/main.py
```

**Frontend** (Vite on `http://localhost:5173`):

```bash
cd frontend
bun install
bun run dev
```

Once both are running, the frontend dev server proxies/talks to the backend API described in [docs/expected-api.md](docs/expected-api.md).

## Continuing work

- API contract lives in [docs/expected-api.md](docs/expected-api.md) — keep it in sync with `backend/app/api/`.
- Backend endpoints: `app/api/*.py` (routers) → `app/schemas/*.py` (request/response models) → `app/services/*.py` (business logic, e.g. `prediction.py`).
- ML models/notebooks live under `ml/`; see [ml/README.md](ml/README.md) for setup. The backend's `services/prediction.py` is where trained models get wired into the API.
- Datasets go under `data/raw/` (original, untouched) and `data/processed/` (cleaned/split); neither is committed — see [data/README.md](data/README.md) for the expected folder structure.
- Run backend tests with `pytest` from `backend/` (test suite scaffolding lives in `backend/tests/`).
