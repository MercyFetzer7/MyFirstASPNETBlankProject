document.getElementById('btnSubmit').addEventListener("click", function () {
    alert("From=" + document.getElementById("txtFrom").value +
        ", Subject=" + document.getElementById("txtSubject").value +
        ", Message=" + document.getElementById("txtMessage").value);
})


// with jquery
/* $('#btnSubmit').click( function () {
    alert("From=" + $("#txtFrom").val() +
        ", Subject=" + $("#txtSubject").val() +
        ", Message=" + $("#txtMessage").val());
    $("#imgGanderson).fadeOut("slow")
}) */
