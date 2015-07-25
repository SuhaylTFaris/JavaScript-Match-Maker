var students = [];
var mentors = [];

function createPerson(first, last, phone, city) {
  var person = {};

  person.first = first;
  person.last = last;
  person.full = first + " " + last;
  person.phone = phone;
  person.city = city;

  return person;
}

function grabValues() {
  var first = document.getElementById('firstName').value;
  var last = document.getElementById('lastName').value;
  var phone = document.getElementById('phone').value;
  var city = document.getElementById('city').value;

  return createPerson(first, last, phone, city);
}
