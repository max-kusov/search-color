const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");
const searchText = document.querySelector(".search-text");


searchBtn.onclick = () => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
    if (searchInput.value != "") {
        let values = searchInput.value;
        searchText.innerHTML = "Возможно вы искали" + " " + "<span style='font-weight: 700; ' >" + values + "</span>";
    } else {
        searchText.innerHTML = "";
    }
    searchText.classList.remove("active");


}
cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchText.classList.add("active");
    searchInput.value = "";
}

