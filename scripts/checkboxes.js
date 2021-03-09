$(function() {
    var data = localStorage.getItem("box-1");
    if (data !== null) {
        $("input[id='box-1']").attr("checked", "checked");
    }
});
$("input[id='box-1']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-1", $(this).val());
    } else {
        localStorage.removeItem("box-1");
    }
});

$(function() {
    var data = localStorage.getItem("box-2");
    if (data !== null) {
        $("input[id='box-2']").attr("checked", "checked");
    }
});
$("input[id='box-2']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-2", $(this).val());
    } else {
        localStorage.removeItem("box-2");
    }
});

$(function() {
    var data = localStorage.getItem("box-3");
    if (data !== null) {
        $("input[id='box-3']").attr("checked", "checked");
    }
});
$("input[id='box-3']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-3", $(this).val());
    } else {
        localStorage.removeItem("box-3");
    }
});
$(function() {
    var data = localStorage.getItem("box-4");
    if (data !== null) {
        $("input[id='box-4']").attr("checked", "checked");
    }
});
$("input[id='box-4']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-4", $(this).val());
    } else {
        localStorage.removeItem("box-4");
    }
});
$(function() {
    var data = localStorage.getItem("box-5");
    if (data !== null) {
        $("input[id='box-5']").attr("checked", "checked");
    }
});
$("input[id='box-5']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-5", $(this).val());
    } else {
        localStorage.removeItem("box-5");
    }
});
$(function() {
    var data = localStorage.getItem("box-6");
    if (data !== null) {
        $("input[id='box-6']").attr("checked", "checked");
    }
});
$("input[id='box-6']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-6", $(this).val());
    } else {
        localStorage.removeItem("box-6");
    }
});
$(function() {
    var data = localStorage.getItem("box-7");
    if (data !== null) {
        $("input[id='box-7']").attr("checked", "checked");
    }
});
$("input[id='box-7']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-7", $(this).val());
    } else {
        localStorage.removeItem("box-7");
    }
});
$(function() {
    var data = localStorage.getItem("box-8");
    if (data !== null) {
        $("input[id='box-8']").attr("checked", "checked");
    }
});
$("input[id='box-8']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-8", $(this).val());
    } else {
        localStorage.removeItem("box-8");
    }
});
$(function() {
    var data = localStorage.getItem("box-9");
    if (data !== null) {
        $("input[id='box-9']").attr("checked", "checked");
    }
});
$("input[id='box-9']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-9", $(this).val());
    } else {
        localStorage.removeItem("box-9");
    }
});
$(function() {
    var data = localStorage.getItem("box-10");
    if (data !== null) {
        $("input[id='box-10']").attr("checked", "checked");
    }
});
$("input[id='box-10']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-10", $(this).val());
    } else {
        localStorage.removeItem("box-10");
    }
});
$(function() {
    var data = localStorage.getItem("box-11");
    if (data !== null) {
        $("input[id='box-11']").attr("checked", "checked");
    }
});
$("input[id='box-11']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("box-11", $(this).val());
    } else {
        localStorage.removeItem("box-11");
    }
});


$("input:checkbox").click(function() {
    var bol = $("input:checkbox:checked").length >= 6;
    $("input:checkbox").not(":checked").attr("disabled", bol);
});