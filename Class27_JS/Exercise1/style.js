let s = prompt("введите пол (m,f)");
if (s != "m" && s != "f") {
    alert("Get out );
} else {
    let v = prompt("введите возрост!");
    if ((v > 25 && s == "m") || (s == "f" && v > 18)) {
        alert("Welcome to the club");
    } else {
        alert("go home");
    }
}
