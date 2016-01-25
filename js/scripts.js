function Contact(firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


//
// $(document).ready(function() {
//
//   $("form").submit(function(event){
//
//     event.preventDefault();
//   });
//
// });
