console.log('sanity check!');
var students = [];
var mentors = [];

function getStudent() {
  var name = prompt('What is the student\'s name?');
  var lastName = prompt('What is the student\'s last name?')
  var number = prompt('What is the student\'s phone #?');
  var city = prompt('In what city does this student currently live?');
  city.toLowerCase();

  var studentInfo = {};

  studentInfo.name = name;
  studentInfo.lastName = lastName;
  studentInfo.number = number;
  studentInfo.city = city;

  students.push(studentInfo);

  var li = document.createElement('li');
  var last = students.length - 1;
  var studentList = document.getElementById('student');

  var textnode = document.createTextNode('Name: ' + students[last].name + ' ' + '| Last Name: ' + students[last].lastName + ' ' + '| City: ' + students[last].city + ' ' + '| Number: ' + students[last].number);

    li.appendChild(textnode);
    studentList.appendChild(li);

    var newStudent = prompt('Do you want to add another student? (Type in "yes" or close the dialog box if finished.)');
    if (newStudent.toLowerCase() === 'yes') {
      getStudent();
    }
  }

function getMentor() {
  var name = prompt('What is the mentor\'s name?');
  var lastName = prompt('What is the mentor\'s last name?')
  var number = prompt('What is the mentor\'s phone #?');
  var city = prompt('In what city does this mentor currently live?');
  city.toLowerCase();

  var mentorInfo = {};

    mentorInfo.name = name;
    mentorInfo.lastName = lastName;
    mentorInfo.number = number;
    mentorInfo.city = city;

    mentors.push(mentorInfo);

    var li = document.createElement('li');
    var last = mentors.length - 1;
    var mentorList = document.getElementById('mentor');

    var textnode = document.createTextNode('Name: ' + mentors[last].name + ' ' + '| Last Name: ' + mentors[last].lastName + ' ' + '| City: ' + mentors[last].city + ' ' + '| Number: ' + mentors[last].number);

      li.appendChild(textnode);
      mentorList.appendChild(li);

      var newMentor = prompt('Do you want to add another mentor?');
      if (newMentor.toLowerCase() === 'yes') {
      getMentor();
    }
  }

document.getElementById('get_student').addEventListener('click', function(event) {
    getStudent();
  });

document.getElementById('get_mentor').addEventListener('click', function(event) {
    getMentor();
  });

  var studentStyle = document.getElementsByTagName('ul')[0];
  var mentorStyle = document.getElementsByTagName('ul')[1];
