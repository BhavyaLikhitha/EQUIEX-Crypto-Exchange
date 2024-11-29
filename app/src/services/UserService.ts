

export interface SignupData {
  username: string;
  email: string;
  password: string;

}

export async function signupUser(data: SignupData): Promise<Response> {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("password", data.password);
 

  const response = await fetch(`http://localhost:3002/users/signup`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    if (response.status >= 400 && response.status < 500) {
      const error = await response.json();
      throw new Error(`Client Error (${response.status}): ${error.message}`);
    } else if (response.status >= 500) {
      throw new Error(`Server Error (${response.status}): ${response.statusText}`);
    }
  }

  return response;
}
