// NYU Shanghai Course Catalog & Requirements Data

export const CATEGORIES = {
  core: { label: 'Core', color: '#57068c' },
  writing: { label: 'Writing', color: '#1565C0' },
  language: { label: 'Language', color: '#2196F3' },
  gps: { label: 'GPS', color: '#2E7D32' },
  major: { label: 'Major', color: '#E65100' },
  elective: { label: 'Elective', color: '#546E7A' },
};

export const SEMESTERS = [
  { id: 'Y1-Fall', label: 'Year 1 — Fall', year: 1 },
  { id: 'Y1-Spring', label: 'Year 1 — Spring', year: 1 },
  { id: 'Y2-Fall', label: 'Year 2 — Fall', year: 2 },
  { id: 'Y2-Spring', label: 'Year 2 — Spring', year: 2 },
  { id: 'Y3-Fall', label: 'Year 3 — Fall', year: 3 },
  { id: 'Y3-Spring', label: 'Year 3 — Spring', year: 3 },
  { id: 'Y4-Fall', label: 'Year 4 — Fall', year: 4 },
  { id: 'Y4-Spring', label: 'Year 4 — Spring', year: 4 },
];

export const MAJORS = [
  { id: 'cs', label: 'Computer Science' },
  { id: 'ds', label: 'Data Science' },
  { id: 'econ', label: 'Economics' },
  { id: 'business', label: 'Business and Finance' },
  { id: 'math', label: 'Honors Mathematics' },
];

export const GRADUATION_CREDITS = 128;
export const MAX_CREDITS_PER_SEMESTER = 18;
export const MIN_CREDITS_PER_SEMESTER = 12;

// Requirements that every student must fulfill
export const CORE_REQUIREMENTS = [
  { id: 'social-and-cultural-foundations', label: 'Social and Cultural Foundations', category: 'gps', coursesNeeded: 4, creditsNeeded: 16,
    subcourses: ['GPS', 'Perspectives on the Humanities (PoH)', 'IPC 1', 'IPC 2'] },
  { id: 'writing', label: 'Writing', category: 'writing', coursesNeeded: 2, creditsNeeded: 8,
    subcourses: ['Writing as Inquiry (WAI)', 'Perspectives on the Humanities (PoH)'] },
  { id: 'mathematics', label: 'Mathematics', category: 'core', coursesNeeded: 1, creditsNeeded: 4,
    subcourses: ['One 4-credit Math course or placing into Calculus'] },
  { id: 'science', label: 'Science', category: 'core', coursesNeeded: 2, creditsNeeded: 8,
    subcourses: ['Experimental Discovery (ED)', 'Science, Technology, and Society (STS)'] },
  { id: 'algorithmic-thinking', label: 'Algorithmic Thinking', category: 'core', coursesNeeded: 1, creditsNeeded: 4,
    subcourses: ['One 4-credit class from Algorithmic Thinking (AT) category'] },
  { id: 'language', label: 'Language', category: 'language', coursesNeeded: 4, creditsNeeded: 16,
    subcourses: ['Chinese students: English for Academic Purposes (EAP) — 8 credits', 'Non-Chinese students: passing or placing out of Intermediate Chinese II — 0-16 credits'] },
];

// Major-specific requirements 
export const MAJOR_REQUIREMENTS = {
  cs: { label: 'Computer Science', coursesNeeded: 10, creditsNeeded: 40 },
  ds: { label: 'Data Science', coursesNeeded: 10, creditsNeeded: 40 },
  econ: { label: 'Economics', coursesNeeded: 10, creditsNeeded: 40 },
  business: { label: 'Business and Finance', coursesNeeded: 10, creditsNeeded: 40 },
  math: { label: 'Honors Mathematics', coursesNeeded: 10, creditsNeeded: 40 },
};

// Course Catalog
export const COURSE_CATALOG = [
  // ═══ WRITING ═══
  { id: 'WRIT-SHU-001', code: 'WRIT-SHU 001', name: 'Writing as Inquiry', credits: 4, category: 'writing', department: 'Writing' },
  { id: 'WRIT-SHU-002', code: 'WRIT-SHU 002', name: 'Writing as Exploration', credits: 4, category: 'writing', department: 'Writing' },
  { id: 'WRIT-SHU-011', code: 'WRIT-SHU 011', name: 'Writing Workshop I', credits: 4, category: 'writing', department: 'Writing' },
  { id: 'WRIT-SHU-012', code: 'WRIT-SHU 012', name: 'Writing Workshop II', credits: 4, category: 'writing', department: 'Writing' },

  // ═══ CHINESE LANGUAGE ═══
  { id: 'CHIN-SHU-101', code: 'CHIN-SHU 101', name: 'Elementary Chinese I', credits: 4, category: 'language', department: 'Chinese' },
  { id: 'CHIN-SHU-102', code: 'CHIN-SHU 102', name: 'Elementary Chinese II', credits: 4, category: 'language', department: 'Chinese' },
  { id: 'CHIN-SHU-201', code: 'CHIN-SHU 201', name: 'Intermediate Chinese I', credits: 4, category: 'language', department: 'Chinese' },
  { id: 'CHIN-SHU-202', code: 'CHIN-SHU 202', name: 'Intermediate Chinese II', credits: 4, category: 'language', department: 'Chinese' },
  { id: 'CHIN-SHU-301', code: 'CHIN-SHU 301', name: 'Advanced Chinese I', credits: 4, category: 'language', department: 'Chinese' },
  { id: 'CHIN-SHU-302', code: 'CHIN-SHU 302', name: 'Advanced Chinese II', credits: 4, category: 'language', department: 'Chinese' },

  // ═══ ENGLISH FOR ACADEMIC PURPOSES (EAP) ═══
  { id: 'EAP-SHU-101', code: 'EAP-SHU 101', name: 'English for Academic Purposes I', credits: 4, category: 'language', department: 'English' },
  { id: 'EAP-SHU-102', code: 'EAP-SHU 102', name: 'English for Academic Purposes II', credits: 4, category: 'language', department: 'English' },

  // ═══ GPS (Global Perspectives on Society) ═══
  { id: 'GPS-SHU-101', code: 'GPS-SHU 101', name: 'GPS: Society', credits: 4, category: 'gps', department: 'GPS' },     

  // ═══ CORE FOUNDATIONS ═══
  { id: 'CORE-SHU-103', code: 'CORE-SHU 103', name: 'Algorithmic Thinking', credits: 4, category: 'core', department: 'Core' },
  { id: 'CORE-SHU-104', code: 'CORE-SHU 104', name: 'Perspectives on the Humanities (PoH)', credits: 4, category: 'core', department: 'Core' },
  { id: 'CORE-SHU-105', code: 'CORE-SHU 105', name: 'Experimental Discovery (ED)', credits: 4, category: 'core', department: 'Core' },
  { id: 'CORE-SHU-106', code: 'CORE-SHU 106', name: 'Science, Technology, and Society (STS)', credits: 4, category: 'core', department: 'Core' },

  // ═══ INTERDISCIPLINARY PERSPECTIVES ON CHINA (IPC) ═══
  { id: 'IPC-SHU-101', code: 'IPC-SHU 101', name: 'Interdisciplinary Perspectives on China 1', credits: 4, category: 'gps', department: 'GPS' },
  { id: 'IPC-SHU-102', code: 'IPC-SHU 102', name: 'Interdisciplinary Perspectives on China 2', credits: 4, category: 'gps', department: 'GPS' },

  // ═══ MATHEMATICS ═══
  { id: 'MATH-SHU-101', code: 'MATH-SHU 101', name: 'Calculus', credits: 4, category: 'major', department: 'Mathematics', majors: ['cs', 'ds', 'math', 'physics', 'econ'] },
  { id: 'MATH-SHU-121', code: 'MATH-SHU 121', name: 'Honors Calculus I', credits: 4, category: 'major', department: 'Mathematics', majors: ['math'] },
  { id: 'MATH-SHU-122', code: 'MATH-SHU 122', name: 'Honors Calculus II', credits: 4, category: 'major', department: 'Mathematics', majors: ['math'] },
  { id: 'MATH-SHU-140', code: 'MATH-SHU 140', name: 'Linear Algebra', credits: 4, category: 'major', department: 'Mathematics', majors: ['cs', 'ds', 'math', 'physics'] },
  { id: 'MATH-SHU-201', code: 'MATH-SHU 201', name: 'Multivariable Calculus', credits: 4, category: 'major', department: 'Mathematics', majors: ['cs', 'ds', 'math', 'physics'] },
  { id: 'MATH-SHU-233', code: 'MATH-SHU 233', name: 'Theory of Probability', credits: 4, category: 'major', department: 'Mathematics', majors: ['cs', 'ds', 'math'] },
  { id: 'MATH-SHU-235', code: 'MATH-SHU 235', name: 'Probability and Statistics', credits: 4, category: 'major', department: 'Mathematics', majors: ['ds', 'econ', 'business'] },
  { id: 'MATH-SHU-261', code: 'MATH-SHU 261', name: 'Discrete Mathematics', credits: 4, category: 'major', department: 'Mathematics', majors: ['cs', 'math'] },
  { id: 'MATH-SHU-263', code: 'MATH-SHU 263', name: 'Ordinary Differential Equations', credits: 4, category: 'major', department: 'Mathematics', majors: ['math', 'physics'] },
  { id: 'MATH-SHU-328', code: 'MATH-SHU 328', name: 'Honors Analysis I', credits: 4, category: 'major', department: 'Mathematics', majors: ['math'] },
  { id: 'MATH-SHU-329', code: 'MATH-SHU 329', name: 'Honors Analysis II', credits: 4, category: 'major', department: 'Mathematics', majors: ['math'] },
  { id: 'MATH-SHU-340', code: 'MATH-SHU 340', name: 'Honors Algebra I', credits: 4, category: 'major', department: 'Mathematics', majors: ['math'] },
  { id: 'MATH-SHU-341', code: 'MATH-SHU 341', name: 'Honors Algebra II', credits: 4, category: 'major', department: 'Mathematics', majors: ['math'] },

  // ═══ COMPUTER SCIENCE ═══
  { id: 'CSCI-SHU-101', code: 'CSCI-SHU 101', name: 'Introduction to Computer Science and Data Science', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs', 'ds'] },
  { id: 'CSCI-SHU-11', code: 'CSCI-SHU 11', name: 'Introduction to Computer Programming', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs', 'ds'] },
  { id: 'CSCI-SHU-210', code: 'CSCI-SHU 210', name: 'Data Structures', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs', 'ds'] },
  { id: 'CSCI-SHU-220', code: 'CSCI-SHU 220', name: 'Algorithms', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs', 'ds'] },
  { id: 'CSCI-SHU-215', code: 'CSCI-SHU 215', name: 'Computer Architecture', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs'] },
  { id: 'CSCI-SHU-308', code: 'CSCI-SHU 308', name: 'Computer Networking', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs'] },
  { id: 'CSCI-SHU-360', code: 'CSCI-SHU 360', name: 'Machine Learning', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs', 'ds'] },
  { id: 'CSCI-SHU-361', code: 'CSCI-SHU 361', name: 'Computer Security', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs'] },
  { id: 'CSCI-SHU-376', code: 'CSCI-SHU 376', name: 'Operating Systems', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs'] },
  { id: 'CSCI-SHU-400', code: 'CSCI-SHU 400', name: 'Software Engineering', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs'] },
  { id: 'CSCI-SHU-410', code: 'CSCI-SHU 410', name: 'Database Systems', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs', 'ds'] },
  { id: 'CSCI-SHU-420', code: 'CSCI-SHU 420', name: 'Artificial Intelligence', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs', 'ds'] },
  { id: 'CSCI-SHU-480', code: 'CSCI-SHU 480', name: 'Computer Vision', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs'] },
  { id: 'CSCI-SHU-490', code: 'CSCI-SHU 490', name: 'Natural Language Processing', credits: 4, category: 'major', department: 'Computer Science', majors: ['cs', 'ds'] },

  // ═══ DATA SCIENCE ═══
  { id: 'DATS-SHU-101', code: 'DATS-SHU 101', name: 'Introduction to Data Science', credits: 4, category: 'major', department: 'Data Science', majors: ['ds'] },
  { id: 'DATS-SHU-210', code: 'DATS-SHU 210', name: 'Data Mining', credits: 4, category: 'major', department: 'Data Science', majors: ['ds'] },
  { id: 'DATS-SHU-235', code: 'DATS-SHU 235', name: 'Statistical Inference', credits: 4, category: 'major', department: 'Data Science', majors: ['ds'] },
  { id: 'DATS-SHU-301', code: 'DATS-SHU 301', name: 'Deep Learning', credits: 4, category: 'major', department: 'Data Science', majors: ['ds', 'cs'] },
  { id: 'DATS-SHU-400', code: 'DATS-SHU 400', name: 'Capstone Project in Data Science', credits: 4, category: 'major', department: 'Data Science', majors: ['ds'] },

  // ═══ ECONOMICS ═══
  { id: 'ECON-SHU-1', code: 'ECON-SHU 1', name: 'Intro to Microeconomics', credits: 4, category: 'major', department: 'Economics', majors: ['econ', 'business'] },
  { id: 'ECON-SHU-2', code: 'ECON-SHU 2', name: 'Intro to Macroeconomics', credits: 4, category: 'major', department: 'Economics', majors: ['econ', 'business'] },
  { id: 'ECON-SHU-10', code: 'ECON-SHU 10', name: 'Intermediate Microeconomics', credits: 4, category: 'major', department: 'Economics', majors: ['econ'] },
  { id: 'ECON-SHU-11', code: 'ECON-SHU 11', name: 'Intermediate Macroeconomics', credits: 4, category: 'major', department: 'Economics', majors: ['econ'] },
  { id: 'ECON-SHU-301', code: 'ECON-SHU 301', name: 'Econometrics', credits: 4, category: 'major', department: 'Economics', majors: ['econ'] },
  { id: 'ECON-SHU-303', code: 'ECON-SHU 303', name: 'International Trade', credits: 4, category: 'major', department: 'Economics', majors: ['econ'] },
  { id: 'ECON-SHU-310', code: 'ECON-SHU 310', name: 'Game Theory', credits: 4, category: 'major', department: 'Economics', majors: ['econ'] },
  { id: 'ECON-SHU-320', code: 'ECON-SHU 320', name: 'Development Economics', credits: 4, category: 'major', department: 'Economics', majors: ['econ'] },
  { id: 'ECON-SHU-330', code: 'ECON-SHU 330', name: 'Public Economics', credits: 4, category: 'major', department: 'Economics', majors: ['econ'] },
  { id: 'ECON-SHU-340', code: 'ECON-SHU 340', name: 'Labor Economics', credits: 4, category: 'major', department: 'Economics', majors: ['econ'] },

  // ═══ BUSINESS & FINANCE ═══
  { id: 'BUSF-SHU-101', code: 'BUSF-SHU 101', name: 'Financial Accounting', credits: 4, category: 'major', department: 'Business and Finance', majors: ['business'] },
  { id: 'BUSF-SHU-150', code: 'BUSF-SHU 150', name: 'Statistics for Business', credits: 4, category: 'major', department: 'Business and Finance', majors: ['business'] },
  { id: 'BUSF-SHU-200', code: 'BUSF-SHU 200', name: 'Foundations of Finance', credits: 4, category: 'major', department: 'Business and Finance', majors: ['business'] },
  { id: 'BUSF-SHU-210', code: 'BUSF-SHU 210', name: 'Managerial Accounting', credits: 4, category: 'major', department: 'Business and Finance', majors: ['business'] },
  { id: 'BUSF-SHU-250', code: 'BUSF-SHU 250', name: 'Corporate Finance', credits: 4, category: 'major', department: 'Business and Finance', majors: ['business'] },
  { id: 'BUSF-SHU-260', code: 'BUSF-SHU 260', name: 'Marketing', credits: 4, category: 'major', department: 'Business and Finance', majors: ['business'] },
  { id: 'BUSF-SHU-300', code: 'BUSF-SHU 300', name: 'Investments', credits: 4, category: 'major', department: 'Business and Finance', majors: ['business'] },
  { id: 'BUSF-SHU-310', code: 'BUSF-SHU 310', name: 'Entrepreneurial Finance', credits: 4, category: 'major', department: 'Business and Finance', majors: ['business'] },
  { id: 'BUSF-SHU-320', code: 'BUSF-SHU 320', name: 'International Finance', credits: 4, category: 'major', department: 'Business and Finance', majors: ['business'] },
];

// Get departments for filtering
export const DEPARTMENTS = [...new Set(COURSE_CATALOG.map(c => c.department))].sort();
