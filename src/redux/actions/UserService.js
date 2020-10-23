export const UserService = {
    login,
    logout
};

async function login(username, password) {}

function logout() {
    localStorage.removeItem("token");
}