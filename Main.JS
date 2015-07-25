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
