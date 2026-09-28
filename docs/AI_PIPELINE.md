# NITI Intelligence Document Pipeline

## Phase 1 — Better instructions

The Worker gives the model NITI-specific rules covering evidence grounding, numerical fidelity, geography, period, units, document noise and unsupported claims.

## Phase 2 — Document cleaning and chunking

The Worker receives extracted document text from the frontend, removes common extraction noise, removes URLs and repeated navigation lines, normalises whitespace and creates bounded evidence chunks with overlap.

## Phase 3 — Retrieval / RAG

The Worker scores chunks against the user question using exact phrase and term matches, then sends only the most relevant evidence chunks to the model. This reduces irrelevant context and makes the evidence boundary explicit.

## Phase 4 — Evidence verification

The model is instructed to cite [SOURCE CHUNK n] for substantive factual claims. The Worker validates that cited chunk IDs actually exist in the retrieved evidence and rejects invalid or ungrounded responses.

This is deterministic citation validation, not a second model-based fact checker. A later phase can add a separate verification model call if evaluation shows it is necessary.

## Phase 5 — Evaluation

A fixed 50-question benchmark is stored in docs/EVALUATION_QUESTIONS.md. It covers exact extraction, comparison, evidence absence, numerical fidelity, document structure and presentation extraction.

The benchmark should be run after changes to:
- system instructions
- retrieval logic
- model
- document cleaning
- chunk size
- frontend document extraction

## Current boundary

The browser extracts documents. The Worker cleans, chunks and retrieves supplied context. The model answers from retrieved evidence. No persistent document vector database is required for this phase.

## Future upgrade

If the document corpus becomes persistent and large, the retrieval layer can move from in-request keyword retrieval to embeddings plus a vector index. That is a separate scaling step, not required for the current prototype.
