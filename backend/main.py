"""Vercel entrypoint: exposes the FastAPI `app` (see docs/adr/0002)."""

from tau.api.app import app

__all__ = ["app"]
