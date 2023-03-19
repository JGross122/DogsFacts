function createInfoBlock(){
    // Create the block element
    var block = document.createElement("div");
    
    // Set the dimensions and styles of the block
    block.style.width = "400px";
    block.style.height = "100px";
    block.style.backgroundColor = "#1c1a1a";
    block.style.border = "2px solid #303030";
    block.style.position = "fixed";
    block.style.top = "50%";
    block.style.left = "50%";
    block.style.transform = "translate(-50%, -50%)";
    block.style.opacity = 0.9;
    block.style.textAlign = "center";
    block.style.fontSize = "200%";
    block.style.color = "#909090";
    
    // Add some information to the block
    var info = document.createElement("p");
    info.style.backgroundColor = "#1c1a1a";
    info.innerHTML = "Discord - Mr. Wydra#2785";
    block.appendChild(info);

    // Add a click event listener to the block
    block.addEventListener("click", function(e) {
        block.style.display = "none";
    });
    
    
    // Add the block to the body of the page
    document.body.appendChild(block);
}