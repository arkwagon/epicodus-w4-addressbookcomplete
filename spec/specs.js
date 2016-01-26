describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("Rita","Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.address).to.eql([]);
  });
  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sherlock","Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});

describe("Address", function() {
  it("creates a new address with the kind of address, street, city, state fields", function() {
    var testAddress = new Address("Home","324 Street","Portland","Oregon");
    expect(testAddress.kind).to.equal("Home");
    expect(testAddress.street).to.equal("324 Street");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.equal("Oregon");
  });
  it("creates a method that concatenates the user's full address", function() {
    var fullAddress = new Address("Home","324 Street","Portland","Oregon");
    expect(testAddress.fullAddress()).to.equal("Home: 324 Street, Portland, Oregon");
  });
});
