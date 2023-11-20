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

    courseLookUp(courseNumber) {
      return this.courses.filter(course => {
        return courseNumber === course.code;
      })[0];
    },

    addNote(courseNumber, note) {
      let course = this.courseLookUp(courseNumber);

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
      let course = this.courseLookUp(courseNumber);

      if (course) {
        if (course.notes) {
          course.notes = note;
        }
      }
    }
  }
}



let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"