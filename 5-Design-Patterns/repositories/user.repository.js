export async function saveUser(data) {
    // Real project မှာ Database နဲ့ ချိတ်ဆက်မယ်။
    console.log("Saving user:", data);

    return {
        id: 1,
        name: data.name,
        email: data.email
    };
}