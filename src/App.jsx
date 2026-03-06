import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import usePlanner from './hook/userPlanner';

function App() {
  const {
    plan,
    major,
    setMajor,
    studentName,
    setStudentName,
    addCourse,
    removeCourse,
    clearAll,
    totalCredits,
    semesterCredits,
    requirementProgress,
    isCourseInPlan,
  } = usePlanner();

  const [addingSemester, setAddingSemester] = useState(null);

  return (
      <div className="app">
        <Header
          major={major}
          setMajor={setMajor}
          studentName={studentName}
          setStudentName={setStudentName}
          totalCredits={totalCredits}
          onClearAll={handleClearAll}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div/>
      </div>
    );
}

export default App;