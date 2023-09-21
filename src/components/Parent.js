import React, { useState } from "react";

const Parent = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const submitBtnHandler = (e) => {
		// Prevent Default:
		e.preventDefault();

		// Getting the values from the input boxs:
		const userName = e.target.username.value;
		const password = e.target.password.value;

		// // Checking for Empty Values:
		// if (!(userName && password)) {
		// 	return;
		// }

		setIsLoggedIn((prev) => !prev);

		// Reset the form after processing the values (optional)
		e.target.reset();
	};
	return (
		<>
			<h1>Parent Component</h1>
			{!isLoggedIn && (
				<form onSubmit={submitBtnHandler}>
					<div>
						<label htmlFor='username'>Username:</label>
						<input type='text' name='username' />
					</div>
					<div>
						<label htmlFor='password'>Password:</label>
						<input type='password' name='password' />
					</div>
					<button>Login</button>
				</form>
			)}
			{isLoggedIn && <p>You are logged in!</p>}
		</>
	);
};

export default Parent;