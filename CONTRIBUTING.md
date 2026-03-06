# Contributing to NYU Shanghai Course Planner

Thanks for contributing, the biggest help right now is **adding course data for your major or minor** so more students can use this tool.

## Adding a New Minor

All data lives in `src/data/courses.js`. Here's how to add a minor (e.g. Economics):

### Step 1 — Register the minor

Add an entry to `AVAILABLE_MINORS`:

```js
export const AVAILABLE_MINORS = [
  { id: 'math', label: 'Mathematics' },
  { id: 'econ', label: 'Economics' },   // ← new
];
```

### Step 2 — Define requirements

Add a key to `MINOR_REQUIREMENTS`:

```js
export const MINOR_REQUIREMENTS = {
  math: { /* ... */ },

  econ: {
    id: 'econ',
    label: 'Economics Minor',
    coursesNeeded: 5,
    description: 'Five ECON-SHU courses, including Intro to Microeconomics.',

    // Option A: auto-match by course-id prefix
    coursePrefix: 'ECON-SHU',

    // Option B (or combine with A): explicit list of course ids
    // includedCourseIds: ['ECON-SHU-1', 'ECON-SHU-2', ...],

    // Courses to exclude even if they match the prefix
    excludedCourseIds: [],

    notes: 'At least one 300-level ECON course required.',
  },
};
```

### Step 3 — Make sure the courses exist in the catalog

If the courses aren't already in `COURSE_CATALOG`, add them:

```js
{
  id: 'ECON-SHU-1',
  code: 'ECON-SHU 1',
  name: 'Intro to Microeconomics',
  credits: 4,
  category: 'elective',       // or 'major' if it's a major course
  department: 'Economics',
},
```

That's it! The planner will automatically track progress in the sidebar.

---

## Adding a New Major

### Step 1 — Register

```js
export const MAJORS = [
  { id: 'cs', label: 'Computer Science' },
  { id: 'ds', label: 'Data Science' },   // ← new
];
```

### Step 2 — Define requirements

```js
export const MAJOR_REQUIREMENTS = {
  cs: { /* ... */ },

  ds: {
    label: 'Data Science',
    bulletin: 'AY 2025-26',
    coursesNeeded: 11,
    creditsNeeded: 44,
    requiredCourses: [
      { courseId: 'DATS-SHU-101', label: 'Intro to Data Science' },
      // ...
    ],
    electivesNeeded: 3,
    electiveCreditsNeeded: 12,
  },
};
```

### Step 3 — Tag courses

In `COURSE_CATALOG`, tag courses that count toward the new major:

```js
{
  id: 'DATS-SHU-101',
  code: 'DATS-SHU 101',
  name: 'Intro to Data Science',
  credits: 4,
  category: 'major',
  department: 'Data Science',
  majorRoles: { ds: 'required' },
  // A course can serve multiple majors:
  // majorRoles: { ds: 'required', cs: 'elective' },
},
```

---

## Adding Courses to the Catalog

Each course needs these fields:

| Field          | Required | Description |
|----------------|----------|-------------|
| `id`           | ✓        | Unique id, e.g. `'CSCI-SHU-210'` |
| `code`         | ✓        | Display code, e.g. `'CSCI-SHU 210'` |
| `name`         | ✓        | Course name |
| `credits`      | ✓        | Number (usually 4) |
| `category`     | ✓        | `'core'`, `'major'`, `'elective'`, `'gps'`, `'writing'`, `'language'` |
| `department`   | ✓        | Department name, used for filtering |
| `prerequisites` |         | Array of course ids |
| `prerequisiteNote` |      | Human-readable prerequisite text |
| `majorRoles`   |          | `{ majorId: 'required' | 'elective' | 'capstone' }` |

---

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run lint      # check for issues
npm run format    # auto-format with Prettier
```

## Guidelines

- Keep data accurate 
- Test your changes locally before submitting a PR
- No need to modify components