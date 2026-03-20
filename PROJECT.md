# Back to Basic — Project Brief

> **"Advancing Animal Wellness through Evidence-Based Clinical Nutrition"**
> 근거 중심의 영양학으로 반려동물의 삶의 질을 혁신하다: Back to the Basic

---

## Overview

**Lab:** Veterinary Clinical Nutrition Laboratory, KNU (경북대학교 수의과대학 임상영양학 교실)
**Platform:** Astro + Cloudflare Pages (free, unlimited bandwidth)
**Design:** Academic & Clean — Navy `#1a2e4a` + Forest Green `#2d7a4f`
**Language:** English (primary)
**Deploy URL:** `backtobasic.pages.dev`

---

## Sitemap

```
/                          → Home (Hero + Section Cards)
├── /about/professor       → Professor Profile
├── /about/philosophy      → Back to Basic Philosophy
├── /research              → Research Overview
│   ├── /research/precision-nutrition
│   ├── /research/metabolomics
│   └── /research/clinical-trials
├── /careers               → Careers & Alumni (3 tracks)
└── /collaboration         → Global Network
```

---

## Page Content Plan

### Home `/`
- **Hero**: Main slogan (EN + KR), CTA button → About
- **Section Cards (4)**: Lab Introduction / Research / Careers / Global Collaboration
- **Brief intro paragraph** of the lab's mission

---

### Professor `/about/professor`
| Field | Content |
|---|---|
| Degree | PhD, Seoul National University (SNU) |
| Experience | 13 years internal medicine clinical practice |
| Current | Professor, Kyungpook National University (KNU) |
| Specialty | Veterinary Clinical Nutrition, Internal Medicine |
| Links | PubMed / Google Scholar / ORCID |

---

### Philosophy `/about/philosophy`
- **Back to the Basic** — the lab's core philosophy
- Importance of **BCS (Body Condition Score)** and **MCS (Muscle Condition Score)** in clinical assessment
- Why evidence-based nutrition outperforms commercial marketing claims
- The role of clinical nutrition in chronic disease management

---

### Research `/research/*`

#### Precision Nutrition
- **Tools:** NGS (Next-Generation Sequencing), Gut Microbiome Analysis
- **Goal:** Individualized nutrition strategies based on microbiome profiles
- **Applications:** Species-specific probiotic/prebiotic design, diet-microbiome interaction mapping

#### Metabolomics
- **Tools:** LC-MS (Liquid Chromatography–Mass Spectrometry), HPLC
- **Goal:** Identify disease-specific nutritional biomarkers from serum/urine metabolites
- **Applications:** Early detection markers for CKD, hepatic disease, metabolic syndrome

#### Clinical Trials
- **Setting:** University Veterinary Medical Teaching Hospital (VMTH)
- **Focus:**
  - CKD (Chronic Kidney Disease) — renal diet formulation & progression monitoring
  - Oncology nutrition — cachexia management, immunonutrition
  - Allergy & food intolerance — elimination diet protocols
- **Output:** Evidence-based clinical nutrition guidelines

---

### Careers `/careers`

Three tracks for graduates:

| Track | Role | Key Outlets |
|---|---|---|
| **Clinical Specialists** | Advanced internal medicine + nutrition-integrated clinicians | VMTH, specialty hospitals |
| **Industry Leaders** | R&D, formulation, regulatory affairs at pet food companies | Hill's, Royal Canin, Purina, Korean domestic brands |
| **Research Scientists** | Government research institutes, corporate R&D labs | NIFS, KFRI, biohealth startups |

**Global trend note:** Veterinary nutritionist hiring mandates are expanding in the US and EU — creating growing international demand.

---

### Global Collaboration `/collaboration`
- Collaboration with **DACVN-certified** (Diplomate, American College of Veterinary Nutrition) specialists
- Conference participation: **ACVIM**, ESVCN, WSAVA Nutrition committee
- Joint research projects with overseas institutions
- **Gallery:** Conference photos, lab exchange visits, co-author meetings

---

## Design System

### Colors
```css
--color-primary:    #1a2e4a;  /* Deep Navy */
--color-accent:     #2d7a4f;  /* Forest Green */
--color-bg:         #ffffff;
--color-bg-subtle:  #f8fafc;
--color-text:       #1e293b;
--color-muted:      #64748b;
```

### Typography
- **English:** Inter (Google Fonts)
- **Korean:** Noto Sans KR (Google Fonts)
- **Headings:** font-weight 700, letter-spacing tight
- **Body:** font-weight 400, line-height 1.75

### Component Inventory
| Component | Purpose |
|---|---|
| `Navbar` | Top navigation with logo + links |
| `Footer` | Lab name, contact, social links |
| `Hero` | Full-width banner with slogan |
| `SectionCard` | Clickable card linking to main sections |
| `PublicationList` | Ordered list of papers with DOI links |
| `TeamMember` | Photo + name + role card |
| `ResearchArea` | Icon + title + description block |
| `CareerTrack` | Track name + description + example roles |

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | [Astro](https://astro.build) | Zero-JS by default, ideal for static lab sites |
| Styling | Tailwind CSS | Utility-first, fast prototyping |
| Hosting | Cloudflare Pages | Free, global CDN, unlimited bandwidth |
| Fonts | Google Fonts | Inter + Noto Sans KR |
| Icons | Heroicons (via SVG) | MIT license, academic feel |

---

## Development Setup

```bash
# 1. Clone / enter project
cd backtobasic

# 2. Install dependencies (after npm create astro)
npm install

# 3. Run dev server
npm run dev        # → http://localhost:4321

# 4. Build for production
npm run build

# 5. Deploy
# Push to GitHub → Cloudflare Pages auto-deploys
```

---

## Deployment (Cloudflare Pages)

1. Push repo to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com) → Create project → Connect GitHub
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Save → auto-deploys on every `git push`

---

## Content TODO (Requires Real Data)

- [ ] Professor headshot photo
- [ ] Full publication list (PubMed IDs or DOIs)
- [ ] Conference/collaboration photos
- [ ] Specific collaborator names & institutions
- [ ] Lab contact email
- [ ] Any existing lab social media or Google Scholar link
