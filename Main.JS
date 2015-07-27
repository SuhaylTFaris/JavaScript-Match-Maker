console.log('sanity check!');
var students = [],
  mentors = [];

  function getStudent() {
  var name = prompt('What is the student\'s name?');
  var number = prompt('What is the student\'s phone #?');
  var city = prompt('In what city does this student currently live?');
  city.toLowerCase();

  var studentInfo = {};

  studentInfo.name = name;
  studentInfo.number = number;
  studentInfo.city = city;

  students.push(studentInfo);

  var li = document.createElement('li');
  var last = students.length - 1;
  var studentList = document.getElementById('student');
