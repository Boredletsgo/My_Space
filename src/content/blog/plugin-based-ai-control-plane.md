---
title: Designing a Plugin-Based AI Control Plane
description: Why a deterministic execution engine plus a conversational LLM surface beats a single monolithic agent.
date: 2026-03-14
tags: [Agentic AI, MCP, Architecture]
---

When you let an LLM drive real infrastructure, the hardest problem is not prompting —
it is deciding **where the trust boundary sits**.

## The dual-surface pattern

The architecture I keep coming back to splits the system in two:

1. **A conversational surface** — a custom agent profile, skill manifests, and an MCP
   STDIO server. This is where natural language lives.
2. **A deterministic headless engine** — plain, testable code that performs the actual
   mutations against downstream APIs.

The LLM never executes. It _proposes_. The engine validates and executes.

```text
user ──▶ LLM agent ──▶ structured plan ──▶ engine ──▶ Azure DevOps
                                   ▲
                             schema validation
```

## Why plugins

A test-engine-agnostic plugin contract means onboarding a new execution tool costs
exactly one new plugin — not a refactor of the control plane. The contract defines:

- capability discovery
- a typed request/response schema
- an explicit confirmation guard on every mutating operation

## Security by construction

Deny-by-default egress, policy-as-code allowlists, SSO-only credentials, and redacted
append-only audit trails. These are not add-ons — they are the reason the system was
allowed anywhere near production.
