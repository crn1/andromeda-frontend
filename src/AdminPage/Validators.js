export const emailValid = email => {
	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return re.test(String(email).toLowerCase());
}

export const passwordsMatch = (password, confirmPassword) => {
	return password === confirmPassword;
}

export const passwordValid = password => {
	if(password.length >= 8)
	{
		return true;
	}
	return false;
}
