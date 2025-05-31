---
marp: true
theme: default
paginate: true
footer: 'https://pradeepl.com/series/model-context-protocol'
title: 'Model Context Protocol (MCP)'
---

<style>
  section {
    font-size: 28px; /* Base font size */
  }
  section li {
    font-size: 0.9em; /* List items relative size */
    line-height: 1.4;
  }
  section p {
    font-size: 0.9em;
  }
  section h3 {
    font-size: 1.6em;
  }
</style>

# Model Context Protocol (MCP)
## Bridging the Gap for AI Integration  
_Pradeep Loganathan_

---

### The Landscape: AI Today  
* **Strengths of Large Language Models (LLMs):**  
  - Remarkable natural language understanding and generation  
  - Trained on vast datasets for broad knowledge  
* **Key Limitations:**  
  - Static knowledge, limited to training cutoff date  
  - Lack of access to real-time or proprietary data  
  - Isolated from action-taking capabilities  

---

### The Need for Integration  
* **Access to Real-Time & Domain-Specific Data:**  
  - News updates, stock prices, personal data  
* **Performing Actions:**  
  - Sending emails, booking appointments  
* **Leveraging Specialized Tools:**  
  - Code interpreters, math solvers, file systems  

---

### Current Integration Approaches  
* **Retrieval Augmented Generation (RAG)**  
* **Direct API Calls**  
* **Agent Frameworks (e.g., LangChain)**  
* **Challenges:** Diverse auth methods, data formats, brittle integrations  

---

### Tool & Action Integration Patterns  
* **Function Calling / Tool Usage:** OpenAI Functions, LangChain Agents  
* **Custom API Integrations**  
* **Agentic Frameworks**  

---

## Foundational Models  
* Trained on diverse data (text, code, images)  
* General purpose: text generation, summarization, translation, Q&A  
* Base for many applications  
* May lack domain depth or real-time info  

---

## Use-Case Specific Models  
* Fine-tuned from foundational models or trained on specific data  
* Specialized for domains like medicine, law, customer support  
* Often smaller, more efficient  
* Usually still require external data/tool integration  

> Both foundational and specialized models **benefit from robust external context integration**  

---

![bg center 50%](./images/foundational-specialized.png)

---

## The M x N Integration Challenge  

* **Problem:** Integrating *M* AI models with *N* external tools/APIs grows exponentially complex  
* **1 Model x N Tools:**  
  - Multiple bespoke integrations  
  - Diverse auth, data formats, error handling  
  - Maintenance nightmares  
* **M Models x N Tools:**  
  - Repeated effort across models  
  - Inconsistent behavior  
  - Difficult upgrades or swaps  

> This "spaghetti" of point-to-point integrations calls for a standardized approach  

---

![bg center 50%](./images/mxn-integration.png)

---

## Solution: Model Context Protocol (MCP)  

* **What is MCP?**  
  - An open standard protocol enabling secure, reliable AI model interaction with external tools & data  
* **Key Benefits:**  
  - **Standardization:** Simplifies M x N integration complexity  
  - **Interoperability:** Models and tools connect easily  
  - **Discoverability:** Models can find and understand available capabilities  
  - **Security:** Framework for secure communication & authorization  

---

## MCP: Core Concepts  

* **Decoupling:**  
  - Separates AI model (client) from tools/data providers (hosts)  
  - Models don’t need tool-specific API knowledge  
* **Standardized Interface:**  
  - Common language (JSON-RPC) for requests and responses  
* **Capability Advertisement:**  
  - Hosts declare their tools and data capabilities in a structured format  
* **Secure Communication:**  
  - Authentication and authorization mechanisms included  

---

![bg center 50%](./images/mcp-simplified.png)

---

## MCP: Technical Foundations  

* **Communication Backbone:**  
  - JSON-RPC standard messages (requests, responses, notifications)  
* **Flexible Transport Layers:**  
  - STDIO (standard input/output)  
  - HTTP/SSE (Server-Sent Events)  
  - WebSockets  

---

## MCP: Capabilities & Interactions  

* **Capability Discovery:**  
  - Models learn which tools/resources are available  
  - Includes tools (interpreters), data resources, prompts  
* **Invocation & Responses:**  
  - Standardized tool/resource invocation  
  - Unified error and response handling  

---

![bg center 50%](./images/MCP-interaction.png)

---

![bg center 100%](./images/mcp-acme-stock.png)

