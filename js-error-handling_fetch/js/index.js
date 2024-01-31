console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function getUser(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error parsing JSON");
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    return (errorElement.innerText = error);
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    if (!user) {
      return null;
    } {
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;}
  })
);

// throw errorElement("Network error");
// throw new Error("Cannot divide by zero!")
// return (output.innerText = error)
