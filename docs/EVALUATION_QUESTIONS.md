# NITI Intelligence Evaluation Questions

Use these 50 questions as a fixed regression benchmark. Run them against the same source document or document set after changes to prompts, retrieval, models or frontend behaviour.

## Exact extraction

1. What is the exact value reported for the primary indicator?
2. What year or reference period does that value belong to?
3. What unit is used for the reported value?
4. What geography does the reported value refer to?
5. What is the exact name of the programme or initiative mentioned?
6. Which institution is identified as the data owner or implementing institution?
7. What date is given for the reported event or milestone?
8. What is the exact percentage reported for the specified indicator?
9. What is the exact count reported for the specified geography?
10. What source or dataset is cited for the stated figure?

## Comparison

11. How does State A compare with State B on the specified indicator?
12. How does the state value compare with the national value?
13. Which period has the higher value according to the document?
14. What difference between the two reported values is explicitly supported by the source?
15. Does the document describe an increase, decrease or no change?
16. Which geography is explicitly described as having the higher value?
17. What comparison is made between rural and urban areas?
18. What comparison is made across the two reporting periods?
19. What comparison is made across the two sectors?
20. Does the source explicitly identify a leading or lagging geography?

## Evidence absence

21. Does the document provide the requested indicator?
22. Does the document provide the requested year?
23. Does the document provide the requested geography?
24. Does the document provide a value for the requested unit?
25. Does the document identify the requested data source?
26. Is there enough evidence to determine the requested conclusion?
27. Does the source provide the requested rural and urban breakdown?
28. Does the source provide district-level data for the requested indicator?
29. Does the source provide a methodology for the reported figure?
30. What information is missing that prevents a definitive answer?

## Numerical fidelity

31. What exact number is reported, including its unit?
32. Is the reported value a count, percentage, rate, ratio or index?
33. What denominator or base is explicitly stated?
34. What base year is explicitly stated?
35. What period is covered by the reported growth rate?
36. Are there multiple values for the same indicator, and how are they distinguished?
37. Does the source report a value above 100%, and what does it call that measure?
38. Are any values explicitly marked unavailable, null, not applicable or estimated?
39. Does the document round the reported figure?
40. Are there footnotes or qualifiers attached to the numerical value?

## Document structure and presentation

41. Is the requested statement a substantive finding or only a heading/navigation item?
42. Which section contains the evidence supporting the requested finding?
43. Does the table of contents contain a matching phrase without supporting evidence?
44. Is the requested claim supported by body text, a table, a chart or a footnote?
45. What substantive finding can be extracted from the relevant section?
46. What recommendation is explicitly stated, if any?
47. Which figures should appear on a presentation slide for the requested topic?
48. Which statements should be excluded because they are copyright, URLs, page numbers, headers or footers?
49. Are there conflicting values or statements in the source?
50. What uncertainty or limitation should accompany the answer?

## Scoring

For each question record:

- Correctness: 0–1
- Evidence grounding: 0–1
- Numerical fidelity: 0–1
- Time/geography fidelity: 0–1
- Hallucination avoidance: 0–1
- Concision: 0–1
- Source traceability: 0–1

Production-critical questions should target 6/7 or higher.

Keep the questions fixed. Change the source corpus only when deliberately testing corpus coverage.
