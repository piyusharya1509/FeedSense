# ML

Sentiment, topic, and priority models for customer feedback, plus the notebooks used to explore and train them.

## Layout

```
ml/
├── notebooks/   Exploratory notebooks (e.g. 01_data_exploration.ipynb)
├── src/         Reusable pipeline code
│   ├── preprocessing.py
│   ├── sentiment.py
│   ├── topics.py
│   ├── priority.py
│   └── evaluation.py
├── models/      Trained model artifacts (not committed)
└── requirements.txt
```

## Setup

```bash
cd ml
python -m venv .venv
.venv\Scripts\activate      # Windows
# source .venv/bin/activate # macOS/Linux
pip install -r requirements.txt
```

## Working with notebooks

```bash
jupyter notebook notebooks/
```

Datasets referenced by the notebooks are expected under `../data/raw/` and `../data/processed/` — see [data/README.md](../data/README.md) for the expected structure and dataset links.

## Continuing work

- `src/preprocessing.py` — text cleaning/normalization shared across models.
- `src/sentiment.py`, `src/topics.py`, `src/priority.py` — one module per prediction task.
- `src/evaluation.py` — shared metrics/evaluation helpers.
- Trained artifacts saved under `models/` are consumed by `backend/app/services/prediction.py` — keep the expected input/output shape in sync with [docs/expected-api.md](../docs/expected-api.md).
