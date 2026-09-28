# NITI Intelligence Evaluation Set

Use this benchmark to test document-grounded answers across model, prompt, retrieval and frontend changes.

## Categories

1. Exact extraction: values, dates, names and locations.
2. Comparison: compare only facts present in the source.
3. Evidence absence: expected response explicitly states when the document is insufficient.
4. Numerical fidelity: preserve exact values, units and periods.
5. Document structure: ignore contents pages, page numbers, URLs, copyright, headers and footers.
6. Presentation extraction: use substantive findings, not headings or navigation text.
7. Ambiguity: preserve unclear geography, year or unit rather than guessing.
8. Conflicting evidence: surface conflicts instead of silently choosing a value.

## Scoring

Score each answer on correctness, evidence grounding, numerical fidelity, time/geography fidelity, hallucination avoidance, concision and source traceability.

Target: at least 6 of 7 on production-critical questions.

## Regression rule

Keep a fixed 50–100 question set and compare results after every prompt, model, retrieval or frontend change.
