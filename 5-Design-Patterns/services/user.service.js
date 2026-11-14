import { saveUser } from "../repositories/user.repository.js";

export async function createUser(data) {
    if (!data.name || !data.email) {
        throw new Error("Name and email are required");
    }

    return saveUser(data);
}