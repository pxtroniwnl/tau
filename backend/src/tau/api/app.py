"""FastAPI application. Only serves custom-parameter calculations; standard
results are precomputed by `tau.pipeline` and served statically (ADR-0002)."""

from fastapi import FastAPI

from tau import __version__

app = FastAPI(title="Tau API", version=__version__)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "version": __version__}
