import config from '../config';

const headers = {
	'Content-Type': 'application/json',
	Accept: 'application/json'
};

export const getRequest = (body = null, method = 'POST') => {
	const request = {
		headers,
		method,
		credentials: 'same-origin'
		//{method: 'GET', headers, credentials: 'include'}
	};
	if (body && method === 'POST') request.body = JSON.stringify(body);
	return request;
};

export const sendVerificationCode = (params) => {
	const request = getRequest(params);
	return fetch(`${config.API_URL}/auth/sendVerificationCode`, request, {
		mode: 'no-cors'
	}).then((res) => res.json());
};

export const me = () => {
	const request = getRequest();
	return fetch(`${config.API_URL}/auth/me`, request, { mode: 'no-cors' }).then((res) => res.json());
};
export const signOut = () => {
	const request = getRequest();
	return fetch(`${config.API_URL}/auth/signOut`, request, { mode: 'no-cors' }).then((res) => res.json());
};
export const verifyCode = (params) => {
	const request = getRequest(params);
	return fetch(`${config.API_URL}/auth/verifyCode`, request, { mode: 'no-cors' }).then((res) => res.json());
};
// export const verifyCode = ({ mobile, code, countryCode }) => {
// 	return fetch(`${config.API_URL}/auth/verifyCode/${mobile}/${code}/${countryCode}`, { mode: 'no-cors' }).then((res) =>
// 		res.json()
// 	);
// };
export const checkEmail = (params) => {
	const request = getRequest(params);
	return fetch(`${config.API_URL}/auth/checkEmail`, request, {
		mode: 'no-cors'
	}).then((res) => res.json());
};

export const register = (params) => {
	const request = getRequest(params);
	return fetch(`${config.API_URL}/auth/register`, request, {
		mode: 'no-cors'
	}).then((res) => res.json());
};

export const signIn = (params) => {
	const request = getRequest(params);
	return fetch(`${config.API_URL}/auth/signIn`, request, {
		mode: 'no-cors'
	}).then((res) => res.json());
};

export const addAdresses = (params) => {
	const request = getRequest(params);
	return fetch(`${config.API_URL}/auth/addAresses`, request, {
		mode: 'no-cors'
	}).then((res) => res.json());
};

export const addCreditCard = (params) => {
	const request = getRequest(params);
	return fetch(`${config.API_URL}/auth/addCreditCard`, request, {
		mode: 'no-cors'
	}).then((res) => res.json());
};
