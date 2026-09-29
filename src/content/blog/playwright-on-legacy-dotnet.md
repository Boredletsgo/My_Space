---
title: Bringing Playwright to a Legacy .NET Codebase
description: A pragmatic path to modern end-to-end testing when the application predates every testing convention you like.
date: 2026-06-02
tags: [Playwright, Testing, .NET]
---

Legacy enterprise apps rarely fail because tests are hard to write. They fail because
nobody can agree on _what_ to test first.

## Start with a coverage matrix, not a test

Before writing a single spec, map:

| Dimension        | Example                    |
| ---------------- | -------------------------- |
| User journey     | Checkout, admin approval   |
| Risk             | Revenue impact, compliance |
| Change frequency | How often the code moves   |

High risk × high change frequency wins. Everything else waits.

## Make the first test cheap to copy

The first Playwright spec is a template, not a test. Invest in:

- a page-object layer that hides brittle selectors
- fixtures for auth and seeded data
- a single command that runs everything locally and in CI

## Measure the thing you promised

If the pitch was "reduce manual QA effort", instrument it: hours of regression time
before and after. Automation that cannot show its ROI gets deprioritised at the first
budget review.
