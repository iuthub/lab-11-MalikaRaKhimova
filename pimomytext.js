alert("Hello World!");

function fontSize() {
    $("sampletext").style.fontSize = "24pt";
}
file_get_contenfile_get_contentsts
function textStyle() {
    if ($("pimp").checked) {
        $("sampletext").style.fontWeight = "bold";
        $("sampletext").style.textDecoration = "underline blink";
        $("sampletext").style.color = "green";
    } else {
        $("sampletext").style.fontWeight = "normal";
        $("sampletext").style.textDecoration = "none";
        $("sampletext").style.color = "black";
    }
}

function snoopify() {
    $("sampletext").value = $("sampletext").value.toUpperCase();
    $("sampletext").value = $("sampletext").value.split(".").join("-izzle.");
}