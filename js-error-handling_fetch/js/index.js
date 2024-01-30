console.clear();

const userElement = document.querySelector(".user");

async function getUser(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("Network error");
      return null;
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log("Error parsing JSON");
    return null;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    if (!user) {
      console.log("User not found");
      return;
    }
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  })
);
