# Harness-Aware Evaluation of LLM Agents

**Systems, Benchmarks, and Protocols**

[Project website](https://vectorinstitute.github.io/harness-aware-evaluation/) · [arXiv: XXX](https://arxiv.org/)

LLM agent results depend on more than a backbone model. This survey treats each reported score as the outcome of a complete evaluation configuration:

> **Model (M) + Harness (H) + Environment (E) + Evaluator (V)**, tested under an explicit evaluation protocol.

The framework helps distinguish model capability from the effects of context and memory, tool interfaces, execution control, coordination, verification, permissions, environmental conditions, scoring criteria, and resource budgets.

## Paper

- **Paper:** arXiv: XXX
- **Website:** <https://vectorinstitute.github.io/harness-aware-evaluation/>
- **Repository:** <https://github.com/VectorInstitute/harness-aware-evaluation>
- **Contact:** [Shaina Raza](mailto:shaina.raza@vectorinstitute.ai)

## Cited literature

The list includes every work actively cited in the manuscript. It excludes bibliography entries referenced only in commented LaTeX.

### Foundations and agent architectures

- **Language Models are Few-Shot Learners** (2020)
- **Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks** (2020)
- **Training Language Models to Follow Instructions with Human Feedback** (2022)
- [**ReAct: Synergizing Reasoning and Acting in Language Models**](https://arxiv.org/abs/2210.03629) (2022)
- **Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models** ([arXiv](https://arxiv.org/abs/2206.04615), 2022)
- **Toolformer: Language Models Can Teach Themselves to Use Tools** (2023)
- [**Do As I Can, Not As I Say: Grounding Language in Robotic Affordances**](https://proceedings.mlr.press/v205/ichter23a.html) (2023)
- **Generative Agents: Interactive Simulacra of Human Behavior** (2023)
- **Reflexion: Language Agents with Verbal Reinforcement Learning** (2023)

### Agent systems and operational harnesses

- [**AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation**](https://arxiv.org/abs/2308.08155) (2023)
- [**LangGraph**](https://www.langchain.com/blog/langgraph) (2024)
- **SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering** (2024)
- **OpenHands: An Open Platform for AI Software Developers as Generalist Agents** (2025)
- [**Claude Code**](https://claude.com/product/claude-code) (2025)
- [**Codex CLI**](https://learn.chatgpt.com/docs/codex/cli) (2025)
- [**Magentic-UI: Towards Human-in-the-Loop Agentic Systems**](https://arxiv.org/abs/2507.22358) (2025)
- [**Gemini CLI**](https://github.com/google-gemini/gemini-cli) (2026)
- [**OpenClaw: Open-Source AI Assistant**](https://openclaw.ai/) (2026)
- [**NanoClaw**](https://github.com/nanocoai/nanoclaw) (2026)
- [**Hermes Agent**](https://hermes-agent.nousresearch.com/) (2026)

### Harness design, comparison, and optimization

- [**Stop Comparing LLM Agents Without Disclosing the Harness**](https://arxiv.org/abs/2605.23950) (2026)
- **Rethinking the Evaluation of Harness Evolution for Agents** (2026)
- [**Code as Agent Harness**](https://arxiv.org/abs/2605.18747) (2026)
- [**Natural-Language Agent Harnesses**](https://arxiv.org/abs/2603.25723) (2026)
- [**Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses**](https://arxiv.org/abs/2604.25850) (2026)
- **AFlow: Automating Agentic Workflow Generation** (2025)
- [**Intelligent AI Delegation**](https://arxiv.org/abs/2602.11865) (2026)
- [**Verified Multi-Agent Orchestration: A Plan-Execute-Verify-Replan Framework for Complex Query Resolution**](https://arxiv.org/abs/2603.11445) (2026)
- [**HarnessOpt-Bench: Evaluating LLMs at Harness Optimization**](https://arxiv.org/abs/2608.06301) (2026)
- [**Harness-Bench: Measuring Harness Effects Across Models in Realistic Agent Workflows**](https://arxiv.org/abs/2605.27922) (2026)
- [**Towards Direct Evaluation of Harness Optimizers via Priority Ranking**](https://arxiv.org/abs/2605.22505) (2026)

### Context, memory, and procedural knowledge

- [**MemGPT: Towards LLMs as Operating Systems**](https://arxiv.org/abs/2310.08560) (2023)
- [**Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory**](https://arxiv.org/abs/2504.19413) (2025)
- **A-Mem: Agentic Memory for LLM Agents** (2026)
- [**MemEye: A Visual-Centric Evaluation Framework for Multimodal Agent Memory**](https://arxiv.org/abs/2605.15128) (2026)
- [**HaluMem: Evaluating Hallucinations in Memory Systems of Agents**](https://arxiv.org/abs/2511.03506) (2025)
- [**ContextBench: A Benchmark for Context Retrieval in Coding Agents**](https://arxiv.org/abs/2602.05892) (2026)
- **MemBench: Towards More Comprehensive Evaluation on the Memory of LLM-Based Agents** (2025)
- [**SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks**](https://arxiv.org/abs/2602.12670) (2026)

### Tool use, planning, coordination, and interaction

- **ToolLLM: Facilitating Large Language Models to Master 16,000+ Real-World APIs** (2024)
- [**What Is the Model Context Protocol (MCP)?**](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) (2026)
- **OWL: Optimized Workforce Learning for General Multi-Agent Assistance in Real-World Task Automation** (2026)
- **PlanGEN: A Multi-Agent Framework for Generating Planning and Reasoning Trajectories for Complex Problem Solving** (2025)
- [**Magentic-One: A Generalist Multi-Agent System for Solving Complex Tasks**](https://arxiv.org/abs/2411.04468) (2024)
- **AppWorld: A Controllable World of Apps and People for Benchmarking Interactive Coding Agents** (2024)
- [**E-Bench: Benchmarking Multi-Step Tool-Use Agents in Real-World Product Scenarios**](https://arxiv.org/abs/2607.23722) (2026)
- **LiveMCPBench: Can Agents Navigate an Ocean of MCP Tools?** (2026)
- [**τ²-Bench: Evaluating Conversational Agents in a Dual-Control Environment**](https://arxiv.org/abs/2506.07982) (2025)
- **MobileWorld: Benchmarking Autonomous Mobile Agents in Agent-User Interactive and MCP-Augmented Environments** (2026)
- **PARTNR: A Benchmark for Planning and Reasoning in Embodied Multi-Agent Tasks** (2025)

### Safety, robustness, and human oversight

- [**Confidence**](https://docs.typesafe.ai/confidence) (2026)
- [**StressWeb: A Diagnostic Benchmark for Web Agent Robustness under Realistic Interaction Variability**](https://arxiv.org/abs/2604.16385) (2026)
- [**AgentNoiseBench: Benchmarking Robustness of Tool-Using LLM Agents under Noisy Conditions**](https://arxiv.org/abs/2602.11348) (2026)
- [**Are “Solved Issues” in SWE-bench Really Solved Correctly?**](https://arxiv.org/abs/2503.15223) (2026)
- **OS-Harm: A Benchmark for Measuring Safety of Computer Use Agents** (2026)
- **SafeMCP: Proactive Power Regulation for LLM Agent Defense via Environment-Grounded Look-Ahead Reasoning** (2026)
- [**Quantifying Frontier LLM Capabilities for Container Sandbox Escape**](https://arxiv.org/abs/2603.02277) (2026)
- [**Claw-Eval: Towards Trustworthy Evaluation of Autonomous Agents**](https://arxiv.org/abs/2604.06132) (2026)
- **AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents** (2024)
- [**ATBench: A Diverse and Realistic Agent Trajectory Benchmark for Safety Evaluation and Diagnosis**](https://arxiv.org/abs/2604.02022) (2026)

### Environments and agent benchmarks

- **SWE-bench: Can Language Models Resolve Real-World GitHub Issues?** (2024)
- **τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains** (2025)
- [**GPT-6 Astra: A New Generation of Intelligence**](https://openai.com/index/gpt-6-astra/) (2026)
- [**ARC-AGI-3**](https://arcprize.org/arc-agi/3) (2026)
- **WebArena: A Realistic Web Environment for Building Autonomous Agents** (2024)
- **GAIA2: Benchmarking LLM Agents on Dynamic and Asynchronous Environments** (2026)
- [**HoF-Bench: Rediscovering Real AI-Discovered CVEs Without Frontier Models**](https://arxiv.org/abs/2607.27030) (2026)
- [**TUA-Bench: A Benchmark for General-Purpose Terminal-Use Agents**](https://arxiv.org/abs/2606.28480) (2026)
- **Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces** (2026)
- [**WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation**](https://arxiv.org/abs/2605.10912) (2026)
- **MobilityBench: A Benchmark for Evaluating Route-Planning Agents in Real-World Mobility Scenarios** (2026)
- **OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments** (2024)
- **Mind2Web: Towards a Generalist Agent for the Web** (2023)
- **Mind2Web 2: Evaluating Agentic Search with Agent-as-a-Judge** (2026)
- **EditBench: Evaluating LLM Abilities to Perform Real-World Instructed Code Edits** (2026)

### Evaluators and evaluation protocols

- [**AgentRewardBench: Evaluating Automatic Evaluations of Web Agent Trajectories**](https://arxiv.org/abs/2504.08942) (2025)
- [**Agent-as-a-Judge: Evaluate Agents with Agents**](https://arxiv.org/abs/2410.10934) (2024)

### Related surveys

- **A Survey on Large Language Model Based Autonomous Agents** (2024)
- **The Rise and Potential of Large Language Model Based Agents: A Survey** (2025)
- **Evaluation and Benchmarking of LLM Agents: A Survey** (2025)
- **A Survey on Trustworthy LLM Agents: Threats and Countermeasures** (2025)
- **A Survey on the Optimization of Large Language Model-Based Agents** (2026)
- **Evaluating LLM-Based Agents for Multi-Turn Conversations: A Survey** (2026)
- **Generalizability of Large Language Model-Based Agents: A Comprehensive Survey** (2026)
- [**A Survey on Evaluation of LLM-Based Agents**](https://aclanthology.org/2026.findings-acl.1330/) (2026)
- **Agent Harness Engineering: A Survey** (2026)

## Citation

```bibtex
@article{radwan2026harness,
  title   = {Harness-Aware Evaluation of LLM Agents:
             Systems, Benchmarks, and Protocols},
  author  = {Radwan, Ahmed Y. and Vasilakos, Athanasios V.
             and Raza, Shaina},
  journal = {arXiv preprint arXiv:XXXX.XXXXX},
  year    = {2026}
}
```

## Acknowledgements

Resources used in preparing this research were provided, in part, by the Province of Ontario, the Government of Canada through CIFAR, and companies sponsoring the Vector Institute. This research was funded by the European Union’s Horizon Europe AIXPERT project (Grant Agreement No. 101214389).
