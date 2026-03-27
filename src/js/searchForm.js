export function getSearchQuery(callback){
const searchInput = document.querySelector(".search-text");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    const searchValue = searchInput.value.trim();

    if(searchValue !== ""){
        callback(searchValue);
    }
    searchInput.value = "";
});
}