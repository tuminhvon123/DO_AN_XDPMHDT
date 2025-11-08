const API_BASE_URL = "http://127.0.0.1:5001"; // user-service Flask

export async function loginUser(email, password) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

export async function signupUser(data) {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
