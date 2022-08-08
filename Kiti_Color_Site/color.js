const colorInput = document.getElementById("color-input")

colorInput.addEventListener("change", function(event) {
    let color = event.target.value
    document.getElementById('container').style.backgroundColor = color;document.getElementById('title').style.color = color;
})
