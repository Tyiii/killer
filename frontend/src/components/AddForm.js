import React, { useState } from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			phoneNumber: null,
			address: "",
			email: ""
		};

		this.state2 = "";
		
		this.handleChange = this.handleChange.bind(this);
		this.addContact = this.addContact.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({ [name]: value });
		console.log(this.state.firstName);
	}

	addContact(event) {
		event.preventDefault();
	

		if (this.state.firstName === "") {
			this.state2 = 'Please enter a First Name'
		}

		const payload = JSON.stringify(this.state);
		const userId = window.location.pathname;

		fetch("http://localhost:5000/api" + userId + "/add", {
			method: "POST",
			body: payload,
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.catch(err => {
				console.log(err);
				return;
			});

		this.setState({
			firstName: "",
			lastName: "",
			phoneNumber: null,
			address: "",
			email: ""
		});

		this.state2 = 'Contact created successfully';

		return;
	}

	render() {
		return (
			<div class="form-group">
				<form class="addForm">

				<label for="loginName" class="text text-primary">Please enter new contact info</label>
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					class="form-control"
					onChange={this.handleChange}
					value={this.state.firstName}
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					class="form-control"
					onChange={this.handleChange}
					value={this.state.lastName}
				/>
				<input
					type="text"
					name="phoneNumber"
					placeholder="Phone Number"
					class="form-control"
					onChange={this.handleChange}
					value={this.state.phoneNumber}
				/>
				<input
					type="text"
					name="address"
					placeholder="Address"
					class="form-control"
					onChange={this.handleChange}
					value={this.state.address}
				/>
				<input
					type="text"
					name="email"
					placeholder="Email"
					class="form-control"
					onChange={this.handleChange}
					value={this.state.email}
				/>
				<button
					type="submit"
					id="AddButton"
					class="btn btn-primary"
					onClick={this.addContact}
				>
					Add Contact
				</button>
				<a
					type="button"
					id="CancelButton"
					class="btn btn-outline-primary"
					href={window.location.pathname}
					
				>
					Cancel
				</a>

				</form>
				<span id="loginResult" class="badLogin1 text text-warning" value={this.state2} />
			</div>
		);
	}
}

export default App;
