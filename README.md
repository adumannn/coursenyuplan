# nyu shanghai course planner

An open-source, interactive 4-year course planner for NYU Shanghai students. Plan your semesters, track graduation requirements, and visualize your progress toward your major and minor(s).

## Features

- **Semester grid** — drag-free layout of all 8 semesters with per-semester credit counts
- **Course catalog** — searchable/filterable list of NYU Shanghai courses with one-click add
- **Custom courses** — add study-away or unlisted courses manually
- **Major tracking** — progress bars for core, major, and elective requirements
- **Minor tracking** — add one or more minors and see which courses count
- **Dark / light theme** — system-aware with manual toggle
- **Persistent** — everything saved to localStorage automatically

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech Stack

- **React 19** + **Vite 7** — zero-config, fast HMR
- **Pure CSS** — no UI framework, easily customizable
- **localStorage** — no backend needed

## Contributing

The most impactful way to help is **adding data for your major or minor**. See [CONTRIBUTING.md](CONTRIBUTING.md) for a step-by-step guide.

### Quick overview

| Want to\u2026               | Edit this file                  |
|------------------------|---------------------------------|
| Add a major            | `src/data/courses.js` \u2192 `MAJORS` + `MAJOR_REQUIREMENTS` + tag courses with `majorRoles` |
| Add a minor            | `src/data/courses.js` \u2192 `AVAILABLE_MINORS` + `MINOR_REQUIREMENTS` |
| Add courses to catalog | `src/data/courses.js` \u2192 `COURSE_CATALOG` |
| Fix a bug / add a feature | Any component in `src/components/` or hook in `src/hooks/` |

## Project Structure

```
src/
  data/courses.js        \u2190 All course data, majors, minors, requirements
  hooks/usePlanner.js    \u2190 Core state management + requirement calculations
  hooks/useTheme.js      \u2190 Dark/light theme
  components/
    Header.jsx           \u2190 Top bar: name, major/minor pickers, credits
    SemesterGrid.jsx     \u2190 Grid layout of semester cards
    SemesterCard.jsx     \u2190 Individual semester with course list
    CourseCard.jsx       \u2190 Single course chip
    AddCourseModal.jsx   \u2190 Search & add from catalog or create custom
    RequirementsSidebar.jsx \u2190 Progress bars for all requirements
  App.jsx                \u2190 Root component wiring everything together
  App.css                \u2190 All styles (CSS custom properties, responsive)
```

## License

MIT