# FIAC - Future Intelligence Analyst Course
Welcome to the Future Intelligence Analyst Course (FIAC), an interactive, static training platform designed for aspiring Cyber Threat Intelligence (CTI) practitioners.  FIAC provides a gamified learning experience covering the fundamental knowledge and practical skills required for the All-Source Analyst (DCWF 111) work role. The platform is designed to be simplistic, human-readable, and easily accessible. Inspired by [FOC](https://github.com/mwilco03/FOC?tab=readme-ov-file).

## Deployment
- You can interact with this project online using the [GitHub Page](https://p-o-s-t.github.io/fiac/) for this repo.
- You can host this locally/offline by cloning the repo, `git clone https://github.com/p-o-s-t/fiac`, then using a simple HTTP server to access it via localhost, like with `python3 -m http.server`.

## Features
- **Dashboard Centric**: A single-viewport interface for navigating lessons and challenges.
- **Knowledge Modules**: Lessons are structured under 4 core areas originally identified by Mandiant as essentials for an effective CTI Analyst. Each module features a no-scroll slide deck and a randomized Knowledge Check.
- **Interactive Challenges**: Practical exercises with multiple steps that will require knowledge, skills, and abilities (KSAs).
- **Progress Tracking**: Session-based progress saved to `localStorage`, with visual indicators on the dashboard.
- **DCWF Alignment**: Modules are mapped to KSAs from the Defense Cyber Workforce Framework.
- **Resources Library**: Collection of frameworks, tools, and research links collected over the years to help get spun up.

## Technical Details
- **Frontend**: Vanilla HTML5, CSS3 (using CSS Variables), and ES6+ JavaScript.
- **AI Assisted**: This project was developed with the assistance of Gemini, which helped in structuring the curriculum, generating interactive challenges, and ensuring DCWF alignment.
- **No Frameworks**: Built without heavy frameworks to ensure the code itself is an educational resource.
- **Mobile Responsive**: Layouts adjust for different screen sizes while maintaining the no-scroll constraint for lessons.

## License
This project is released under the [Unlicense](LICENSE).
