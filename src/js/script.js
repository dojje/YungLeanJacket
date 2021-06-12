var yungLeanWearingJacket = false;

function jacketinstall() {
    $("video")[0].setAttribute("height", "0");
    $("video")[1].setAttribute("height", "0");
    $("video")[2].setAttribute("height", "0");
    $("video")[3].setAttribute("height", "480");
    var vid = document.getElementsByTagName("video")[3];
    vid.currentTime = 0;
    setTimeout(function(){
        $("video")[0].setAttribute("height", "0");
        $("video")[1].setAttribute("height", "480");
        $("video")[2].setAttribute("height", "0");
        $("video")[3].setAttribute("height", "0");
        var vid = document.getElementsByTagName("video")[3];
        $("#changeJacketStatus").text("Remove Jacket")
        $("#changeJacketStatus").css("cursor", "pointer");
        $("#changeJacketStatus").css("background-color", "hsl(351, 35%, 55%)");
    },1933);

}

function jacketremove() {
    $("video")[0].setAttribute("height", "0");
    $("video")[1].setAttribute("height", "0");
    $("video")[2].setAttribute("height", "480");
    $("video")[3].setAttribute("height", "0");
    var vid = document.getElementsByTagName("video")[2];
    vid.currentTime = 0;
    setTimeout(function(){
        $("video")[0].setAttribute("height", "480");
        $("video")[1].setAttribute("height", "0");
        $("video")[2].setAttribute("height", "0");
        $("video")[3].setAttribute("height", "0");
        var vid = document.getElementsByTagName("video")[2];
        $("#changeJacketStatus").text("Put on Jacket")
        $("#changeJacketStatus").css("cursor", "pointer");
        $("#changeJacketStatus").css("background-color", "hsl(351, 35%, 55%)");
    },2400);

}


$(document).ready(function() {
    jacketOffPath = $("video > source")[0].getAttribute("src");
    jacketOnPath = $("video > source")[1].getAttribute("src");
    jacketRemovePath = $("video > source")[2].getAttribute("src");
    jacketInstallPath = $("video > source")[3].getAttribute("src");

    // Remove all the unused videos
    $("video")[0].setAttribute("height", "480");
    $("video")[1].setAttribute("height", "0");
    $("video")[2].setAttribute("height", "0");
    $("video")[3].setAttribute("height", "0");

    $("#changeJacketStatus").click(function() {
        if (yungLeanWearingJacket) {
            $("#changeJacketStatus").text("Removing Jacket...")
            $("#changeJacketStatus").css("cursor", "default");
            $("#changeJacketStatus").css("background-color", "hsl(351, 15%, 55%)");
            $("#changeJacketStatus").click(function() {});
            jacketremove()
            yungLeanWearingJacket = false;
        }
        else {
            $("#changeJacketStatus").text("Putting on Jacket...")
            $("#changeJacketStatus").css("cursor", "default");
            $("#changeJacketStatus").css("background-color", "hsl(351, 15%, 55%)");
            $("#changeJacketStatus").click(function() {});
            jacketinstall();
            yungLeanWearingJacket = true;
        }
        
    });
});

$("#changeJacketStatus").click(function() {});