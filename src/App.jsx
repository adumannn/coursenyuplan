import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SemesterGrid from './components/SemesterGrid';
import RequirementsSidebar from './components/RequirementsSidebar';
import AddCourseModal from './components/AddCourseModal';
import usePlanner from './hooks/usePlanner';
import useTheme from './hooks/useTheme';

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

  const { theme, toggleTheme } = useTheme();
  const [addingSemester, setAddingSemester] = useState(null);

  const handleClearAll = () => {
    if (
      window.confirm(
        'Are you sure you want to clear all courses from your plan?',
      )
    ) {
      clearAll();
    }
  };

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
      <div className="app-body">
        <main className="app-main">
          <SemesterGrid
            plan={plan}
            semesterCredits={semesterCredits}
            onRemoveCourse={removeCourse}
            onAddClick={setAddingSemester}
          />
        </main>
        <RequirementsSidebar
          requirementProgress={requirementProgress}
          totalCredits={totalCredits}
        />
      </div>
      {addingSemester && (
        <AddCourseModal
          semesterId={addingSemester}
          onAdd={(semId, course) => {
            addCourse(semId, course);
          }}
          onClose={() => setAddingSemester(null)}
          isCourseInPlan={isCourseInPlan}
        />
      )}
    </div>
  );
}

export default App;
