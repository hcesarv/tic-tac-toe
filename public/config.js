function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1
    playerConfigOverlay.style.display = "block";
    backdrop.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = "none";
    backdrop.style.display = "none";
    form.firstElementChild.classList.remove("error");
    formError.textContent = "";

    //clear input value
    form.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playerName").trim();

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add("error");
        formError.textContent = "Please enter a valid name";
        return;
    }

    const updatedPlayer = document.getElementById(
        "player-" + editedPlayer + "-data"
    );

    updatedPlayer.children[1].textContent = enteredPlayerName;

    if (editedPlayer === 1) {
        players[0].name = enteredPlayerName;
    } else {
        players[1].name = enteredPlayerName;
    }

    closePlayerConfig();
}