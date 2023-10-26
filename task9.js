function calculateAverageGrade(grades) {
    const gradeList = grades.split(" ");
    const gradeSum = gradeList.reduce((acc, grade) => acc + parseInt(grade), 0);
    const averageGrade = gradeSum / gradeList.length;
    return averageGrade;
  }
  