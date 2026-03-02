# CivicBridge
### AI-Powered Grievance Redress System for Citizen-Centered Governance

**Designed and built by Sruti Bandyopadhyay | World Bank Group, CIVIC Facility**

🌐 **Live app:** [civicbridge-governance-hub.lovable.app](https://civicbridge-governance-hub.lovable.app/)
📄 **World Bank blog:** [CIVIC: Amplifying Citizens' Voice through AI-Powered Grievance Redress Systems](https://blogs.worldbank.org/en/governance/civic--amplifying-citizens--voice-through-ai-powered-grievance-r)

---

## Background

Each month, millions of people raise concerns about road repairs, benefit delays, and service disruptions. These are real-time signals about what's working in governance — and what isn't. When systems exist to capture this feedback, governments can use it to improve public services. When they don't, citizens stop trying.

India's Centralized Public Grievance Redress and Monitoring System ([CPGRAMS](https://pgportal.gov.in/)) is one of the largest grievance systems in the world, redressing over 11.2 million grievances between 2019 and 2024. Yet like most systems of its kind, it was designed around administrative processes rather than user needs — complex forms, rigid categories, text-heavy interfaces requiring digital literacy that many citizens don't have.

In June 2025, CPGRAMS issued a tender to rebuild its platform with AI features. To support that effort, a five-day design sprint was organized in New Delhi by [Agami](https://www.agami.in/) in collaboration with the World Bank and CPGRAMS, bringing together 60+ AI developers, civil society leaders, public officials, and legal technologists. CivicBridge emerged from that sprint.

---

## What CivicBridge Does

CivicBridge is a prototype grievance redress system built on five design principles:

1. **Meet citizens where they are** — no sign-up, no complex forms
2. **Leverage civil society** — connect marginalized users to CSOs with a tap or voice command
3. **Increase transparency** — e-commerce-style case tracking so citizens always know their status
4. **Empower officials** — dashboards that reveal patterns and bottlenecks, not just individual cases
5. **Unlock connected data** — unify fragmented systems to forecast grievance spikes before they escalate

---

## Three Interfaces, Three User Types

### 🟢 Citizen Portal
Zero-friction complaint filing. No registration required. Citizens can:
- Upload photos, voice notes, or handwritten images
- File in any Indian language or dialect — AI auto-detects language and routes accordingly (e.g., *"paani nahi aa raha"* → water department, no category selection required)
- Request help from verified civil society organizations with a single tap
- Track their complaint status in real time, like an e-commerce order

Uses the open-source **Bhashini API** for multilingual NLP — enabling users with limited literacy to interact via voice.

### 🔵 Grievance Redress Officer (GRO) Dashboard
A responsive operational workspace for government officers handling complaints:
- AI-drafted reply suggestions
- Automatic tagging and priority queuing
- Cross-department collaboration tools
- Live case status visible to citizens throughout

### 🔴 Admin Analytics Dashboard
System-wide view for senior officials and policymakers:
- Trend plots and bottleneck alerts across departments and geographies
- Recurring issue identification — revealing systemic problems, not just individual complaints
- AI-driven case routing recommendations
- Integration-ready with census, constituency, and service delivery datasets for root cause analysis

---

## Data Foundation

The prototype was trained on anonymized CPGRAM citizen feedback records provided by the Government of India — real grievance data that shaped the AI's ability to understand informal, multilingual complaint language and route it accurately without requiring citizens to navigate 18,000+ administrative subcategories.

---

## Key Insight from the Design Sprint

> *"When citizens — especially migrant workers or daily wage earners — file grievances and never hear back, they don't try again."*

The most important design constraint wasn't technical — it was trust. The system had to be responsive enough that marginalized users would keep using it. That shaped every interface decision: the zero-friction citizen portal, the real-time status tracker, the CSO connection feature for users in crisis.

---

## Technical Stack

- **Frontend:** TypeScript / React, built with Lovable
- **Multilingual NLP:** Bhashini API (open-source, Government of India)
- **AI features:** Natural language complaint routing, sentiment analysis, pattern detection
- **Design process:** 5-day participatory design sprint with 60+ stakeholders

---

## Context & Recognition

CivicBridge was developed as part of the **[CIVIC Facility](https://thegpsa.org/civic/)** — the World Bank's global facility supporting civil society organizations and social innovators — and presented at the New Delhi design sprint in June 2025.

It is one of four open-source prototypes developed at the sprint for potential integration into India's national grievance ecosystem.

The underlying design methodology and AI approach are documented in a published World Bank blog post: [CIVIC: Amplifying Citizens' Voice through AI-Powered Grievance Redress Systems](https://blogs.worldbank.org/en/governance/civic--amplifying-citizens--voice-through-ai-powered-grievance-r), August 2025.

---

## Related Work

For the World Bank's internal SEP (Stakeholder Engagement Plan) monitoring tool — applying the same role-differentiated dashboard approach to Environmental & Social Framework compliance — see [role-centric-power-app](https://github.com/Srutiburra/role-centric-power-app) in this profile.
