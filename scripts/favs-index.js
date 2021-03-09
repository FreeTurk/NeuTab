var ytdata = localStorage.getItem('box-1')
var reddata = localStorage.getItem('box-2')
var wikidata = localStorage.getItem('box-3')
var twchdata = localStorage.getItem('box-4')
var gitdata = localStorage.getItem('box-5')
var twitdata = localStorage.getItem('box-6')
var instadata = localStorage.getItem('box-7')
var tikdata = localStorage.getItem('box-8')
var tumbdata = localStorage.getItem('box-9')
var linkdata = localStorage.getItem('box-10')
var facedata = localStorage.getItem('box-11')

checkcheckboxes = function() {
    if (ytdata !== "Youtube" && reddata !== "Reddit" && wikidata !== "Wikipedia" && twchdata !== "Twitch" && linkdata !== "LinkedIn" && gitdata !== "Github" && twitdata !== "Twitter" && instadata !== "Instagram" && tikdata !== "TikTok" && tumbdata !== "Tumblr" && facedata !== "Facebook") {
        $("#shorties").css("display", "flex");
        $("#shorties").css("font-weight", "600");
        $("#shorties").css("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif");
        document.getElementById("shorties").innerText = "Click on 'Settings'\n to get started!"
    }

    if (ytdata === "Youtube") {
        $("#ytbutton").css("display", "block");
    } else {
        $("#ytbutton").css("display", "none");
    }

    if (reddata === "Reddit") {
        $("#redbutton").css("display", "block");
    } else {
        $("#redbutton").css("display", "none");
    }

    if (wikidata === "Wikipedia") {
        $("#wikibutton").css("display", "block");
    } else {
        $("#wikibutton").css("display", "none");
    }

    if (twchdata === "Twitch") {
        $("#twchbutton").css("display", "block");
    } else {
        $("#twchbutton").css("display", "none");
    }

    if (linkdata === "LinkedIn") {
        $("#linkbutton").css("display", "block");
    } else {
        $("#linkbutton").css("display", "none");
    }

    if (gitdata === "Github") {
        $("#gitbutton").css("display", "block");
    } else {
        $("#gitbutton").css("display", "none");
    }

    if (twitdata === "Twitter") {
        $("#twitbutton").css("display", "block");
    } else {
        $("#twitbutton").css("display", "none");
    }

    if (instadata === "Instagram") {
        $("#instabutton").css("display", "block");
    } else {
        $("#instabutton").css("display", "none");
    }

    if (tikdata === "TikTok") {
        $("#tikbutton").css("display", "block");
    } else {
        $("#tikbutton").css("display", "none");
    }

    if (tumbdata === "Tumblr") {
        $("#tumbbutton").css("display", "block");
    } else {
        $("#tumbbutton").css("display", "none");
    }

    if (facedata === "Facebook") {
        $("#facebutton").css("display", "block");
    } else {
        $("#facebutton").css("display", "none");
    }
}


checkcheckboxes();