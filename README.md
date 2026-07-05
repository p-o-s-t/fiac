# FIAC - Future Intelligence Analyst Course

Welcome to the Future Intelligence Analyst Course (FIAC), an interactive, static training platform designed for aspiring Cyber Threat Intelligence (CTI) practitioners. FIAC provides a gamified learning experience covering the fundamental knowledge and practical skills required for the All-Source Analyst (DCWF IN-111) and Threat Analysis (NICE PD-WRL-006) work roles.

The platform is designed to be simplistic, human-readable, and easily accessible. Inspired by [FOC](https://github.com/mwilco03/FOC?tab=readme-ov-file).

## Deployment & Local Development

### 1. Online Access

You can interact with this project online using the official [GitHub Page](https://p-o-s-t.github.io/fiac/).

### 2. Local / Offline Hosting

To run the course locally, clone the repository and start a simple HTTP server within the workspace directory:

```bash
# Clone the repository
git clone https://github.com/p-o-s-t/fiac
cd fiac

# Option A: Start a local server with Python 3
python3 -m http.server 8000

# Option B: Start a local server with NodeJS
npx http-server -p 8000
```

Then navigate to `http://localhost:8000` in your web browser.

> [!NOTE]
> **Progress Tracking:** Student progress and completed challenges are saved locally to your browser's `localStorage`. You can reset your progress at any time by clearing your browser cache/cookies or resetting local storage for the domain.

## Framework & Role Alignments

FIAC is built upon and aligned with three major professional standards for cybersecurity and intelligence:

1. **Mandiant CTI Analyst Core Competencies Framework**:
   The entire curriculum is structured around the 4 core pillars identified by Mandiant as critical for an effective CTI analyst:
   - **Problem Solving**: Logic, structured analysis, and investigative techniques.
   - **Professional Effectiveness**: Clear communication, stakeholder collaboration, and business risk alignment.
   - **Technical Literacy**: Infrastructure, networks, operating systems, security technologies, and roles.
   - **Cyber Threat Proficiency**: Threat actor profiling, vulnerabilities, attribution, and adversarial tradecraft.

2. **Defense Cyber Workforce Framework (DCWF)**:
   Designed to meet training goals for the **All-Source Analyst (IN-111)** work role (formerly DCWF 111), preparing learners to analyze threat information from multiple intelligence sources.

3. **NIST NICE Framework (v2.2.0)**:
   Directly maps to the **Threat Analysis (PD-WRL-006 / Legacy 141)** role, which involves collecting, processing, analyzing, and disseminating cybersecurity threat assessments.

## Repository Structure

```
fiac/
├── .data_sources/                 # Foundational standards and matrices (spreadsheets & PDFs)
├── assets/                        # Shared static assets (CSS, JS, images, icons)
│   ├── css/
│   │   └── style.css              # Main application styling (glassmorphism & custom variables)
│   └── js/
│       ├── progress.js            # Handles state savings to localStorage
│       ├── quiz.js                # Quizzes / knowledge check controller
│       └── slides.js              # Core slide-deck navigation logic
├── capstone/                      # End-to-end intrusion investigation scenario
│   └── investigation.html         # Operation SILVERTHORN capstone (6 phases)
├── challenges/                    # Interactive multi-step hands-on challenges
│   ├── diamond.html               # Diamond Model Reconstruction
│   ├── mitre.html                 # MITRE ATT&CK Mapping
│   ├── pir.html                   # Priority Intelligence Requirements (PIR) Development
│   ├── ssl-tls.html               # SSL/TLS Infrastructure Pivoting
│   ├── strings.html               # Binary Strings Analysis
│   └── tlp.html                   # Traffic Light Protocol (TLP) Classification
├── cyber-threat-proficiency/      # Lesson files under the Cyber Threat Proficiency pillar
├── data/                          # Static databases, malware examples, and quiz questions
│   ├── capstone_certs.json        # Certificate transparency data for the Capstone pivot phase
│   ├── capstone_email.txt         # Raw phishing email artifact for the Capstone triage phase
│   ├── capstone_strings.txt       # Payload strings output for the Capstone analysis phase
│   ├── questions.json             # Lesson Knowledge Check questions bank
│   ├── sample_malware.txt         # Plaintext payload for Strings Analysis challenge
│   └── ssl_db.json                # Pivot data for SSL/TLS infrastructure challenge
├── problem-solving/               # Lesson files under the Problem Solving pillar
├── professional-effectiveness/    # Lesson files under the Professional Effectiveness pillar
├── technical-literacy/            # Lesson files under the Technical Literacy pillar
├── templates/                     # Markdown CTI reporting templates
│   ├── malware-analysis-report.md
│   └── threat-actor-report.md
├── index.html                     # Core Dashboard portal
├── resources.html                 # Curated library of links, frameworks, and CTI tools
└── templates.html                 # Listing page for reporting templates
```

## Foundational Reference Data (under `.data_sources/`)

The repository includes the raw spreadsheets and documents used to construct the curriculum mappings. These serve as auditable benchmarks for the course:
- **`cti-analyst-core-competencies-framework-v1.pdf`**: The Mandiant framework whitepaper outlining the CTI pillars.
- **`NICE Framework Components v2.2.0.xlsx` / `.ods`**: The NIST NICE components outlining Task, Knowledge, and Skill (TKS) statements for cybersecurity roles.
- **`(U) 2025-07-25 DCWF Work Role Tool_v5.1.xlsx`**: Detailed database mapping workforce roles to Tasks and KSAs.
- **`(U) 2025-09-19_DoD8140MatrixV2.1.xlsx`**: Official matrix outlining qualification and certification mappings.
- **`CTI-CMM Metrics Appendix.xlsx`**: Maturity measurements based on the CTI Capability Maturity Model.

## Detailed Curriculum Mappings

Lessons are grouped under their Mandiant framework pillars, with each module mapped to the specific NICE Framework v2.2.0 Task (T), Knowledge (K), and Skill (S) statements for Threat Analysis (`PD-WRL-006`):

### 1. Problem Solving (`problem-solving/`)
- **Intelligence Lifecycle** (`lifecycle.html`) &rarr; **T1798** (Provide intelligence analysis and support), **K1009** (Threat intelligence principles)
- **Frameworks** (`frameworks.html`) &rarr; **T0845** (Identify threat tactics and methodologies), **K0788** (Adversarial tactics principles)
- **Intelligence Requirements** (`requirements.html`) &rarr; **T1647** (Develop PIRs), **K1197** (Priority intelligence requirements)
- **Requests for Information** (`rfi.html`) &rarr; **T0707** (Generate RFIs), **T0569** (Answer RFIs), **K1059** (RFI processes)
- **Basic Malware Analysis** (`malware.html`) &rarr; **K0480** (Knowledge of malware), **K0857** (Malware analysis tools/techniques), **K0916** (Malware analysis principles/practices)
- **Indicators of Compromise** (`iocs.html`) &rarr; **T1644** (Develop cyber operations indicators), **K0825** (Threat vector characteristics)

### 2. Professional Effectiveness (`professional-effectiveness/`)
- **Intelligence Fundamentals** (`fundamentals.html`) &rarr; **T1798** (Provide intelligence analysis and support), **K1008** (Intelligence support activities)
- **Effective Communication** (`reporting.html`) &rarr; **S0385** (Communicating complex concepts), **S0728** (Preparing briefings), **S0791** (Presenting to an audience)
- **Course of Action Development** (`coa.html`) &rarr; **T1798** (Provide intelligence analysis and support), **K1025** (Decision-making policies/procedures)
- **Data Marking** (`data-marking.html`) &rarr; **T1054** (Scope reports to various audiences reflecting classification restrictions), **K0865** (Data classification standards)
- **Data Management** (`data-management.html`) &rarr; **K0989** (Intelligence information repositories), **S0712** (Evaluating data source quality)

### 3. Technical Literacy (`technical-literacy/`)
- **Intelligence in Cyberspace** (`cyberspace.html`) &rarr; **K0990** (Cyber operations principles and practices)
- **Operating Systems** (`os-principles.html`) &rarr; **K0786** (Physical computer components), **K1069** (Virtual machine tools/technologies)
- **Networking Fundamentals** (`networking.html`) &rarr; **K0674** / **K0983** (Computer networking protocols and principles)
- **CIA Triad** (`cia-triad.html`) &rarr; **K0680** (Cybersecurity principles and practices)
- **Cloud Computing** (`cloud-basics.html`) &rarr; **K0915** (Network architecture principles)
- **Cryptography** (`cryptography.html`) &rarr; **K0697** (Encryption algorithm capabilities/applications), **T1035** (Determine threat group use of encryption)
- **Policy** (`policy.html`) &rarr; **K0675** (Risk management processes), **K1010** (Intelligence policies and procedures)
- **Security Technologies** (`security-tech.html`) &rarr; **K1014** (Network security principles), **S0509** (Evaluating security products)
- **Cybersecurity Roles** (`security-roles.html`) &rarr; **K1008** (Intelligence support activities)

### 4. Cyber Threat Proficiency (`cyber-threat-proficiency/`)
- **Threat Actors & Profiling** (`profiling.html`) &rarr; **S0517** (Anticipating threats), **S0535** (Perform threat factor analysis)
- **Attack Surface** (`attack-surface.html`) &rarr; **K0683** / **K0752** (Cybersecurity and system vulnerabilities)
- **Threat Landscape** (`landscape.html`) &rarr; **K0818** (New and emerging cybersecurity risks)
- **Tracking & Attribution** (`tracking.html`) &rarr; **T1053** (Identify and characterize intrusion activities), **T1767** (Monitor threat activities)
- **Adversary Emulation** (`emulation.html`) &rarr; **S0516** (Perform threat emulation tactics), **S0446** (Mimicking threat actors)
- **CVEs** (`vulnerabilities.html`) &rarr; **K0683** (Cybersecurity vulnerabilities)
- **Bug Bounty Programs** (`bug-bounty.html`) &rarr; **K0683** (Cybersecurity vulnerabilities)
- **Adversary Frameworks** (`adversary-frameworks.html`) &rarr; **K0789** (Adversarial tactics tools and techniques), **K1068** (Threat systems and software)
- **Criminal Marketplaces** (`criminal-marketplaces.html`) &rarr; **S0696** (Conducting deep web research)

## Interactive Challenges Mappings

The 6 interactive challenges test hands-on skills required for threat analysis, mapped to specific NICE TKS statements:

- **SSL/TLS Infrastructure** (`challenges/ssl-tls.html`)
  - Pivot on certificate fingerprints, serial numbers, and issuer fields to uncover related C2 nodes.
  - *NICE Mapping*: **S0869** (Metadata analysis), **S0512** (Extracting metadata), **S0540** (Identifying network threats).
- **Strings Analysis** (`challenges/strings.html`)
  - Extract URLs, registry keys, and other indicators of compromise from binary data.
  - *NICE Mapping*: **K0857** (Malware analysis tools/techniques), **S0512** (Extracting metadata), **T0845** (Identify threat tactics/methodologies).
- **TLP Classification** (`challenges/tlp.html`)
  - Categorize data sharing scenarios using the Traffic Light Protocol (TLP 2.0).
  - *NICE Mapping*: **T1054** (Scope reports to various audiences reflecting classification restrictions), **K0865** (Data classification standards/best practices).
- **MITRE ATT&CK Mapping** (`challenges/mitre.html`)
  - Deconstruct a real-world threat intelligence report into ATT&CK tactics, techniques, and sub-techniques.
  - *NICE Mapping*: **T0845** (Identify threat tactics/methodologies), **K0788** (Adversarial tactics principles/practices), **K0789** (Adversarial tactics tools/techniques).
- **Diamond Model Reconstruction** (`challenges/diamond.html`)
  - Reassemble a multi-stage cyber intrusion into the Diamond Model vertices (Adversary, Capability, Infrastructure, Victim).
  - *NICE Mapping*: **T1053** (Identify and characterize intrusion activities), **K0845** (Cyber intrusion activity phases), **S0876** (Perform nodal analysis).
- **PIR Development** (`challenges/pir.html`)
  - Generate and validate Priority Intelligence Requirements (PIRs) for a business threat environment.
  - *NICE Mapping*: **T1647** (Develop PIRs), **S0779** (Determine information requirements), **S0506** (Identify customer information needs).

## Capstone: Intrusion Investigation

The **Capstone** (`capstone/investigation.html`) chains the individual challenge skills into a single, realistic end-to-end scenario — *Operation SILVERTHORN* — where the analyst investigates one consistent intrusion against a fictional healthcare provider (Meridian Health Group). All artifacts (phishing email, payload strings, certificate data) reference the same incident, so indicators discovered in one phase are pivoted on in the next:

1. **Phishing Triage** — extract the sender domain and attachment hash from raw email headers.
2. **Payload Strings Analysis** — recover the C2 domain and registry persistence indicator from the dropped executable.
3. **Infrastructure Pivot** — expand known infrastructure via self-signed certificate fingerprint reuse.
4. **MITRE ATT&CK Mapping** — translate the observed behaviors into tactics and techniques.
5. **Diamond Model Reconstruction** — model the intrusion across all four vertices.
6. **Reporting & Dissemination** — choose the correct TLP marking, attribution confidence language, and PIR alignment.

*NICE Mapping*: **T0845** (Identify threat tactics/methodologies), **T1053** (Identify and characterize intrusion activities), **T1054** (Scope reports reflecting classification restrictions), **S0512** (Extracting metadata), **S0869** (Metadata analysis), **S0876** (Perform nodal analysis).

## License

This project is released under the [Unlicense](LICENSE).
