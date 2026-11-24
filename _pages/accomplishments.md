---
layout: page
title: Selected research and engineering
permalink: /accomplishments/
description: Machine learning, research automation and decision systems.
nav: false
---

<style>
  .post {
    max-width: 860px;
    margin-inline: auto;
    padding-bottom: 2rem;
  }
  .post article {
    font-size: 1.0625rem;
    line-height: 1.75;
    overflow-wrap: break-word;
  }
  .post .post-title {
    line-height: 1.2;
  }
  .post article h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-size: clamp(1.45rem, 3vw, 1.8rem);
    line-height: 1.3;
    scroll-margin-top: 5rem;
  }
  .post article h3 {
    margin-top: 1.75rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  .post article p,
  .post article ul {
    margin-bottom: 1.1rem;
  }
  .post article li {
    margin-bottom: 0.8rem;
  }
  .post article a {
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }
</style>

I build intelligent systems that turn complex information into useful decisions. My work spans large language model training, research automation, financial modeling and computer vision, with an emphasis on reliable evaluation and efficient computation.

[Project portfolio](/projects/) · [GitHub](https://github.com/veetil) · [Research publications](https://scholar.google.com/citations?user=CE95VCIAAAAJ)

## Axinet AI: fine-grained retrieval and evidence-grounded decisions

[Product website](https://axinet.ai/) · [Company discovery video](https://www.linkedin.com/posts/vineeth-veetil_you-dont-build-a-robot-that-googles-the-ugcPost-7511141734966362112-tPlc/) · [Cold-storage search walkthrough](https://www.linkedin.com/posts/vineeth-veetil_an-enterprise-agent-should-spend-its-reasoning-ugcPost-7516541427032477696-6tXS/)

I founded Axinet AI and built its core indexing, retrieval and qualification systems. Its first application helps go-to-market (GTM) teams discover and qualify companies against detailed natural-language requirements using public web evidence.

The underlying challenge is **depth at scale**: finding companies that satisfy several fine-grained conditions across a universe of tens of millions of businesses. A query may combine product capabilities, customer workflows, supplier relationships and a recent event. The relevant evidence is scattered across company websites and news, often expressed indirectly or attached to several different organizations. Axinet indexes more than **10 million companies** and **millions of news articles**, alongside information from static company websites.

My work addresses three connected problems:

- **Building the corpus while preserving recall.** I developed a cascade of lightweight classifiers, embedding-based classifiers and smaller language models to identify relevant business articles and the information worth extracting. Early stages are designed to preserve recall while limiting the amount of material sent to more expensive processing. This involves defining business categories, constructing supervision and evaluating where each filtering stage loses relevant evidence.
- **Connecting entities to retrievable evidence.** Extraction and entity resolution connect company identities to their source material. Company-, article- and passage-level representations support searches both for an entity and for evidence about it. Domain facets capture useful attributes and categories; hybrid keyword and embedding retrieval, reciprocal rank fusion and reranking combine complementary routes to candidate companies.
- **Qualifying matches under a computation budget.** Smaller language models and decision systems evaluate repeated requirement-level checks, with larger models reviewing selected cases. I have also developed experiments on which unresolved companies need further research and which retrieved pages warrant expensive review. The aim is to reduce work while retaining useful matches and distinguishing missing evidence from a failed requirement.

For example, finding a cold-storage operator that announced an expansion requires separating the company operating the warehouse from its refrigeration supplier or building contractor. A supplier's announcement may provide decisive evidence about the operator without making the supplier a match. Dates, locations and whether a project is planned or completed must remain attached to the correct company and event. These are problems of entity attribution, structured retrieval and evidence evaluation that arise throughout the system.

## AI Scientist for Applied ML: experiment execution and evaluation

I built research infrastructure that coordinates dataset construction, coding, remote training and evaluation through specialist agents. Workers exchange dataset manifests, execution specifications, runnable code and measured results, preserving experiment artifacts so another agent or a human researcher can inspect and resume the work.

The system supports task-specific data construction from public text, remote GPU execution and evaluator feedback on labels and task fit. Completed experiments include sentiment baselines and a small Qwen3-4B QLoRA training and evaluation run on an A10G GPU. These runs exercise the path from data preparation to recorded evaluation.

Related work explores different parts of the research process: interactive research ideation, contextual paper ranking, Agent-Evolve for execution-guided code search and Agent Symphony for coordinating coding and review agents.

## TinyTransformer: language model architecture and training

[Source code and training experiments](https://github.com/veetil/TinyTransformer)

I implemented and trained GPT-2-style models in PyTorch, comparing a SwiGLU/RMSNorm variant with a baseline. The implementation includes configurable rotary embeddings and mixture-of-experts components, alongside distributed training, mixed precision, validation and checkpointing. This project explores how architectural and training choices affect learning, with implemented components distinguished from configurations evaluated in training runs.

## Research automation and contextual paper ranking

[Research automation project](/projects/0_project/) · [Paper evaluation project](/projects/1_project/)

I built research workflows for exploring ideas, inspecting related work and organizing implementation and evaluation. A related system uses adaptive pairwise comparisons and Elo-style ranking to prioritize papers against a concrete research objective.

My contribution spans problem formulation, system design and implementation. These projects address the problem of directing limited research time and model context toward information useful to a particular investigation.

## Agent-Evolve: iterative code optimization

[Project write-up](/projects/2_project/)

I developed an experimental system for iterative code improvement combining candidate generation, execution-based evaluation, population search and progressively more expensive checks. The design emphasizes rejecting invalid candidates early, preserving useful alternatives and maintaining an inspectable history of experiments.

## Agent Symphony: coordinating coding and review agents

[Source code](https://github.com/veetil/agent-symphony)

I built a system that runs coding and review agents concurrently, with Redis-backed coordination, persistent sessions and structured feedback. It suppresses duplicate feedback and uses explicit completion conditions that require both the coding agent and evaluator to finish. The engineering challenge is to keep parallel work coherent, preserve useful criticism and determine when the task is actually complete.

## Research-paper review and explanation

I developed a paper-review system that brings together text, figures, code and related work to produce detailed explanations, workflow analyses and critical reviews. I also created a website for reviewing papers through concrete examples. This work addresses the practical problem of making technical literature useful for human readers and subsequent research workflows.

## Financial research and news-based stock-selection experiments

I developed financial hypotheses and models using research papers, books, spread data and news. This included volatility modeling and a news-based stock-selection system with validation experiments. The work highlighted the importance of explicit domain datasets, company relationships and operating context when interpreting information for a financial decision.

## Earlier machine learning and computer vision work

At AppLovin, I was the first data scientist and built early machine-learning and recommendation systems.

Around 2016, I built Caffe-based triplet networks to match fashion photographs taken in the wild with store catalog images, learning representations across substantial visual differences. At Reflective AI, I worked with Kajima on computer-vision systems for monitoring heavy-equipment activity and productivity.

[Visual-search project](/projects/8_project/) · [Industrial computer-vision project](/projects/5_project/)

## Doctoral research and publications

[Google Scholar](https://scholar.google.com/citations?user=CE95VCIAAAAJ)

My doctoral research at the University of Michigan included statistical analysis and optimization for semiconductor design, efficient Monte Carlo methods and GPU-based parallel computation. I worked with Dennis Sylvester and other collaborators on this research, developing a foundation in probabilistic methods, computational efficiency and experimental comparison.
