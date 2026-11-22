from tau.tools.check_trace import doc_rows, problems

DOC = """
| ID | What | Status |
|---|---|---|
| T-01 | catalog | implemented |
| T-02 | coords | planned |
"""


def test_doc_rows_parses_status() -> None:
    assert doc_rows(DOC) == {"T-01": "implemented", "T-02": "planned"}


def test_untracked_tag_and_missing_implementation_are_reported() -> None:
    errors = problems(doc_rows(DOC), {"T-99": {"x.ts"}})
    assert any("T-99" in e for e in errors)
    assert any("T-01" in e for e in errors)


def test_consistent_repo_has_no_problems() -> None:
    assert problems(doc_rows(DOC), {"T-01": {"a.py"}, "T-02": {"b.ts"}}) == []
