const searchInput = document.querySelector("#search-input");
const allTeamName = document.querySelectorAll(".name");

searchInput.addEventListener("keyup", (event) => {
  const searchQuery = event.target.value.toLowerCase();
  for (let i = 0; i < allTeamName.length; i++) {
    const currentTeam = allTeamName[i].textContent.toLowerCase();
    if (currentTeam.includes(searchQuery)) {
      allTeamName[i].style.display = "block";
    } else {
      allTeamName[i].style.display = "none";
    }
  }
});
