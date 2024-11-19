
document.addEventListener("DOMContentLoaded", () => {
    // Collapsible sections
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach((button) => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            button.classList.toggle("active");
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // Quest tracker with local storage
    const questCheckboxes = document.querySelectorAll(".quest-checkbox");
    questCheckboxes.forEach((checkbox) => {
        const questId = checkbox.id;
        // Load saved state from local storage
        const savedState = localStorage.getItem(questId);
        if (savedState === "completed") {
            checkbox.checked = true;
        }

        // Save state to local storage on change
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                localStorage.setItem(questId, "completed");
            } else {
                localStorage.removeItem(questId);
            }
        });
    });
});
