document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-button");
    const items = document.querySelectorAll(".content-item");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.getAttribute("data-category");

            items.forEach((item) => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    document.querySelector('.filter-button[data-category="all"]').click();
});