function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} student`)
    },

    listCourses() {
      console.log(this.courses);
    },

    addCourse(course) {
      this.courses.push(course)
    },

    courseLookup(courseInfo) {
      if (courseInfo === Number(courseInfo)) {
        return this.courses.filter(course => {
          return courseInfo === course.code;
        })[0];
      } else {
        return this.courses.filter(course => {
          return courseInfo === course.name;
        })[0];
      }
    },

    addNote(courseNumber, note) {
      let course = this.courseLookup(courseNumber);

      if (course) {
        if (course.notes) {
          course.notes += `; ${note}`;
        } else {
          course.notes = note;
        }
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.notes) {
        console.log(`${course.name}: ${course.notes}`);
        }
      });
    },

    updateNote(courseNumber, note) {
      let course = this.courseLookup(courseNumber);

      if (course) {
        if (course.notes) {
          course.notes = note;
        }
      }
    }
  }
}

let school = {
  students: [],

  addStudent(student) {
    let acceptableYears = ["1st", "2nd", "3rd", "4th", "5th"];
    if (!acceptableYears.includes(student.year)) {
      console.log("Invalid Year");
    };
    this.students.push(student);
  },

  studentLookup(name, year) {
    return this.students.filter(student => {
      return (student.name === name) && (student.year === year)
    })[0];
  },

  enrollStudent(name, year, course) {
    let student = this.studentLookup(name, year);

    if (student) {
      if (!student.courseLookup(course.code)) {
        student.addCourse(course);
      };
    };
  },

  addGrade(name, year, courseNumber, grade) {
    let student = this.studentLookup(name, year);
    if (!student) {
      console.log("Student not found");
    } else {
      let course = student.courseLookup(courseNumber);

      if (course) {
        course.grade = grade;
      } else {
        console.log("Invalid course");
      }
    }
  },

  getReportCard(name, year) {
    let student = this.studentLookup(name, year);
    if (!student) {
      console.log("Student not found");
    } else {
      student.courses.forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`);
        } else if (course.grade !== 0) {
          console.log(`${course.name}: In progress`);
        } else {
          console.log(`${course.name}: See me after class...`)
        }
      });
    };
  },

  courseReport(courseName) {
    let courseTotal = 0;
    let enrolledStudents = 0;

    console.log(`=${courseName} Grades=`);

    this.students.forEach(student => {
      let course = student.courseLookup(courseName);
      if (course) {
        if (course.grade) {
          console.log(`${student.name}: ${course.grade}`);
          courseTotal += course.grade;
          enrolledStudents++
        }
      }
    });

    let courseAverage = courseTotal / enrolledStudents;

    console.log("---");
    console.log(`Course Average: ${courseAverage}`)

  }
}

let honey = createStudent("Honey", "1st");
let foo = createStudent("foo", '5th');

school.addStudent(foo);
school.addStudent(honey);

school.enrollStudent("foo", "5th", { name: "Math", code: 101 })

school.enrollStudent("Honey", "1st", { name: "Math", code: 101 });

school.enrollStudent("foo", "5th", { name: "english", code: 102 })

school.enrollStudent("Honey", "1st", { name: "english", code: 102 });

school.addGrade("Honey", "1st", 101, 34)
school.addGrade("foo", "5th", 101, 90)
school.addGrade("Honey", "1st", 102, 100)
school.addGrade("foo", "5th", 102, 54)


school.courseReport("Math");
school.courseReport("english")

