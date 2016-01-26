function Contact(firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(kind,street,city,state) {
  this.kind = kind;
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.kind + ": " + this.street + ", " + this.city + ", " + this.state;
}


$(document).ready(function() {
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedKind = $("input#new-address-kind").val();
    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    var newAddress = new Address(inputtedKind, inputtedStreet, inputtedCity, inputtedState);

    if (inputtedFirstName === "" || inputtedLastName === "" || inputtedKind === "" || inputtedStreet === "" || inputtedCity === "" || inputtedState=== "") {
      alert("Please complete all fields!");
    } else {

      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $("#show-contact h3").text(newAddress.kind);
        $(".street").text(newAddress.street);
        $(".city").text(newAddress.city);
        $(".state").text(newAddress.state);


      });
  //Reset Fields to blank
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input#new-address-kind").val("");
      $("input#new-street").val("");
      $("input#new-city").val("");
      $("input#new-state").val("");
    }
  });
});
