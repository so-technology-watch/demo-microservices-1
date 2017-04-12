package domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Customer {

    private int id;
    private String firstname;
    private String lastname;
    private String email;
    private String address;
    private String phoneNumber;

    public Customer(int id, String firstname, String lastname, String email, String address, String phoneNumber) {
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.email = email;
	this.address = address;
	this.phoneNumber = phoneNumber;
    }

    @JsonProperty
    public int getId() {

	return id;
    }

    @JsonProperty
    public void setId(int id) {

	this.id = id;
    }

    @JsonProperty
    public String getFirstname() {

	return firstname;
    }

    @JsonProperty
    public void setFirstname(String firstname) {

	this.firstname = firstname;
    }

    @JsonProperty
    public String getLastname() {

	return lastname;
    }

    @JsonProperty
    public void setLastname(String lastname) {

	this.lastname = lastname;
    }

    @JsonProperty
    public String getEmail() {

	return email;
    }

    @JsonProperty
    public void setEmail(String email) {

	this.email = email;
    }

    @JsonProperty
    public String getAddress() {

	return address;
    }

    @JsonProperty
    public void setAddress(String address) {

	this.address = address;
    }

    @JsonProperty
    public String getPhoneNumber() {

	return phoneNumber;
    }

    @JsonProperty
    public void setPhoneNumber(String phoneNumber) {

	this.phoneNumber = phoneNumber;
    }
}
