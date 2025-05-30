---
marp: true
title: Agentic AI with Actor Model Microservices
subtitle: Need for Resilient, High-Performance Architectures
author: Pradeep Loganathan
theme: pradeepl-slides-theme
size: 16:9
paginate: false
---

<!-- _class: title-slide -->

# Agentic AI 

## The Essential Role of Resilient, High-Performance Architectures 

By Pradeep Loganathan

---

# The Rise of Agentic AI

- **Explosive Growth of AI-Driven Applications:**
  - Demand for immediate insights and decisions is paramount.
  - AI algorithms analyze vast data quickly, enabling predictive insights.
- **Exponential Increase in Connected Endpoints:**
  - Over the last 5 years, endpoints accessing applications have doubled.
  - Projections: Upwards of 1 trillion endpoints by 2030.
  - By 2025, 75% of IoT data will be processed at the edge, reducing latency.
- **The Imperative for Instant Value:**
  - Clients expect timely value; delays impact retention and market position.
  - Financial repercussions: Some businesses report losses over $500,000 for a single hour of outage.
  - Even 10% latency increase can significantly degrade user experience.

---

<!-- _class: image-slide -->
![](./images/agent-evolution.png)

---

# What is Agentic AI?

- Autonomous, Context-Aware, and Action-Oriented Services
    - **Definition:** Autonomous services executing intelligent, long-running workflows.
    - They call Large Language Models (LLMs), process responses, and execute actions.

- Key Characteristics:
    - **Durable Execution:** Workflows complete reliably.
    - **Context Retention:** Agents maintain context across interactions.
    - **Coordination:** Adaptability and distributed coordination.
    - **Tool Use:** Integration with databases, APIs, and enterprise systems.

- The Challenge:
    - Dependency on failure-prone services and high-latency LLMs.
    - Demands robust underlying architectures.

---

# Challenges of Building Agentic AI Systems


- **Resilience & Durability:**
  - Traditional error handling fails in distributed systems.
- **Performance & Responsiveness:**
  - Blocking communication and "cold start" issues.
- **State Management:**
  - Stateless serverless complexity with external databases.
- **Scalability & Elasticity:**
  - Poor resource management under dynamic loads.
- **Operational Complexity & Cost:**
  - High infrastructure costs and technical debt.
---

# The Solution: Actor Model Systems
## The Best Answer to Agentic AI Challenges

- **Stateless stacks hit a wall:** Durable workflows, in‑context memory, & real‑time coordination over classic request/response models.
- **Work‑arounds add drag:** Caches, retries, and glue code - a tax on performance & cost.
- **Time for a stateful runtime:** Need an architecture built for concurrency, isolation, and in‑process state.
- **Enter the Actor Model:** A proven pattern where lightweight actors own their state, talk via async messages, and self‑heal under supervision---perfect for agentic services.

---

<!-- _class: section-slide -->

# The Actor Model 

---

# Introducing the Actor Model
## Foundation for Agentic AI

- **Core Concept:**
  - Actors: lightweight, isolated, asynchronous messaging.
- **Reactive Principles:**
  - Responsive, Resilient, Elastic, Message-driven.
- **Advantages:**
  - No shared mutable state, efficient concurrency, encapsulation.

---

# Actor Model for Resilience

- **Hierarchical Supervision:**
  -   Fault isolation and automated recovery.
- **Failure as Domain Model:**
  -   Graceful error handling.
- **Self-Healing Systems:**
  -   Built-in recovery and workload replication.
- **Benefit:**
  -   Durable workflows amidst external failures.

---