---
marp: true
title: Agentic AI with Actor Model Microservices
subtitle: Need for Resilient, High-Performance Architectures
author: Pradeep Loganathan
paginate: true
theme: default
size: 16:9
style: |
  /* Default styles for regular slides */
  h1 {
    position: absolute;
    top: 20px;
    left: 40px;
    font-size: 1.8em;
    line-height: 1.2;
    margin: 0;
  }
  h2 {
    position: absolute;
    top: 90px;
    left: 40px;
    font-size: 1.3em;
    margin: 0;
    color: #555;
  }
  
  /* Ensure content starts below the header for all slides */
  section {
    padding: 0 40px 40px 40px;
    position: relative;
  }
  
  /* Create a consistent content area that starts at a fixed position */
  section > *:not(h1):not(h2) {
    margin-top: 160px; /* Fixed distance from top of slide */
  }
  
  /* Reset margins for first content element to avoid double spacing */
  section > *:not(h1):not(h2):first-of-type {
    margin-top: 160px;
  }
  
  /* Title slide specific styling - use with <!-- _class: title-slide --> */
  section.title-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px;
  }
  
  section.title-slide h1 {
    position: static; /* Override absolute positioning */
    font-size: 2.2em;
    margin: 0 0 20px 0;
    color: #333;
  }
  
  section.title-slide h2 {
    position: static; /* Override absolute positioning */
    font-size: 1.5em;
    margin: 0 0 30px 0;
    color: #666;
  }
  
  section.title-slide p {
    font-size: 1.1em;
    margin: 0;
    color: #888;
  }
  
  li {
    font-size: 0.9em;
    line-height: 1.3;
  }
  
  ul, ul ul, ul ul ul {
    margin: 0;
    padding-left: 20px;
  }
  
  /* Add gradient line at the bottom of each slide */
  section::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px !important;
    background: linear-gradient(to right, #00FF00, #00B7EB, #800080);
  }
  
  .marp-slide > div:last-child {
    display: none;
  }
  
  /* Section slide styling: Center the header in the middle of the slide */
  section.section-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    text-align: center;
  }
  section.section-slide h1 {
    position: static;
    font-size: 2em;
    margin: 0;
  }
  section.section-slide h2 {
    display: none;
  }
  section.section-slide .content {
    display: none;
  }
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
---

# The Demands of Agentic AI


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

<!-- _class: section-slide -->

# The Actor Model 

---

# Introducing the Actor Model

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