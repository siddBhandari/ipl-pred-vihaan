import http from "@/utils/http";

export const getAllUsers = async () => {
	try {
		const res = await http.get("/users");
		return Promise.resolve(res.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};
