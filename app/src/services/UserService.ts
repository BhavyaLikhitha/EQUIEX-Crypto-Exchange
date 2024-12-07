export interface SignupData {
  username: string;
  email: string;
  password: string;

}

export async function signupUser(data: SignupData): Promise<Response> {

  // Create a FormData object to format the signup data for a POST request.
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("password", data.password);
 

  const response = await fetch(`http://localhost:3002/users/signup`, {
    method: "POST",
    body: formData,
  });

  // Check if the response status indicates an unsuccessful request
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
