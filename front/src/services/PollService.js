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

    async createPoll({ pollTitle, questions }) {
        const headers = new Headers();
        const token = localStorage.getItem("token");
        headers.append("Authorization", `Bearer ${token}`);
        headers.append("content-type", "application/json");

        const request = fetch("/poll", {
            method: "POST",
            body: JSON.stringify({ pollTitle, questions }),
            headers,
        });

        return (await request).json();
    }

    async getPoll(id) {
        const token = localStorage.getItem("token");
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        headers.append("Content-Type", "application/json");

        const request = fetch("/poll/" + id, {
            method: "GET",
            headers,
        });

        return (await request).json();
    }

    async getPolls({ limit, offset } = {}) {
        const token = localStorage.getItem("token");
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        headers.append("Content-Type", "application/json");

        const params = new URLSearchParams();

        if (limit) {
            params.append("limit", limit);
        }

        if (offset) {
            params.append("offset", offset);
        }

        const request = fetch("/poll?" + params, {
            method: "GET",
            headers,
        });

        return (await request).json();
    }

    async vote(id, body) {
        const token = localStorage.getItem("token");
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        headers.append("Content-Type", "application/json");

        console.log(token);

        const request = fetch(`/poll/${id}/vote`, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        });

        return (await request).json();
    }

    async searchPoll(query) {
        const token = localStorage.getItem("token");
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        headers.append("Content-Type", "application/json");
        const params = new URLSearchParams();
        if (query) {
            params.append("query", query);
        }

        const request = fetch(`/poll?${params}`, {
            method: "GET",
            headers,
        });

        return (await request).json();
    }
}

export default new PollService();
