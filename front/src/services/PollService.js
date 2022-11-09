class PollService {
	async login(username) {
		const headers = new Headers();
		headers.append("content-type", "application/json");

		const request = fetch("/user/login", {
			method: "POST",
			body: JSON.stringify({ username }),
			headers,
		});

		return (await request).json();
	}

	// url: /poll/
	// method: post

	// pollTitle: string;
	// questions: [{
	//     title: string;
	//     options: string[];
	//     correct: string;
	//  }]

	// async createPoll() {
	// 	const headers = new Headers();
	// 	headers.append("content-type", "application/json");

	// 	const request = fetch("/poll", {
	// 		method: "POST",
	// 		body: JSON.stringify({ username }),
	// 		headers,
	// 	});

	// 	return (await request).json();
	// }
}

export default new PollService();
