"""Write the API contract consumed by the frontend's typed client.
Run: `uv run python -m tau.api.openapi`."""

import json
from pathlib import Path

from tau.api.app import app

OUT = Path(__file__).resolve().parents[4] / "frontend" / "src" / "api" / "openapi.json"

if __name__ == "__main__":
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(app.openapi(), indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(f"wrote {OUT}")
