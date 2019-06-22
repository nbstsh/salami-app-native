const API_ENDPOINT = 'https://salami.onrender.com/analyze';

export const analyzeImage = async (uri, name, type = 'image/jpeg') => {
	if (!uri) throw new Error('uri needs to be provided!');
	if (!name) throw new Error('name needs to be provided!');

	const formData = new FormData();
	formData.append('file', { uri, name, type });

	const res = await fetch(API_ENDPOINT, {
		method: 'post',
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		body: formData
	});
	const { result } = await res.json();
	if (!result) throw new Error('NO RESULT');

	return result;
};
