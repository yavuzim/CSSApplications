const btnClick = () => {
    document.querySelector(".btn-settings").style.display = "none"
    document.querySelector(".modal").style.display = "flex"
}
const modalOff = () => {
    document.querySelector(".btn-settings").style.display = "block"
    document.querySelector(".modal").style.display = "none"
}
const dropDown_click = () => {
    let status
    document.querySelector(".dropdown-select").style.display === "block" ? status = "none" : status = "block"
    document.querySelector(".dropdown-select").style.display = status
}