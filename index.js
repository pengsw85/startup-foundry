let dropdownOnClickFunction = () => {
    let dropdownItemsCourse = document.querySelectorAll(
        ".dropdown__items--course"
    );

    dropdownItemsCourse.forEach((item) => {
        let courseOption = document.querySelector(
            ".searchBar__option__button--course"
        );

        item.addEventListener("click", () => {
            courseOption.innerHTML = item.children[0].text;
        });
    });

    let dropdownItemsSubject = document.querySelectorAll(
        ".dropdown__items--subject"
    );

    dropdownItemsSubject.forEach((item) => {
        let courseOption = document.querySelector(
            ".searchBar__option__button--subject"
        );

        item.addEventListener("click", () => {
            courseOption.innerHTML = item.children[0].text;
        });
    });

    let dropdownItemsUni = document.querySelectorAll(
        ".dropdown__items--uni"
    );

    dropdownItemsUni.forEach((item) => {
        let courseOption = document.querySelector(
            ".searchBar__option__button--uni"
        );

        item.addEventListener("click", () => {
            courseOption.innerHTML = item.children[0].text;
        });
    });
};

let buttonOnClick = () => {
    let button = document.querySelector(".searchBar__option__button");
    let cardContainer = document.querySelector(".card__container");
    let placeholder = document.querySelector(".placeholder");
    console.log(cardContainer);
    button.addEventListener("click", () => {
        cardContainer.classList.remove("none");
        placeholder.classList.add("hidden");
    });
};

let onLoad = () => {
    dropdownOnClickFunction();
    buttonOnClick();
};

onLoad();
