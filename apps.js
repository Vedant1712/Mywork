var anchor = $("li:last-child");

anchor.className += " active";

document.getElementById("abcd").addEventListener("mouseover", function() {
    document.getElementById("abcd").style.fontSize = "1.3rem";
});

document.getElementById("abcd").addEventListener("mouseout", function() {
    document.getElementById("abcd").style.fontSize = "1rem";
});