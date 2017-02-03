$(document).ready(function() {
    $('select').material_select(); //
	$('ul.tabs').tabs(); // navigation tabs
    
//    function findDialogueTimes() {
//        var participantsList;
//        var dialogueTimesList;
//        var transcriptList;
//        $.get('assets/D3_S1_timestamps.csv', function(data) {
//            var rows = data.split("\n");
//            var participants = [];
//            var dialogueTimes = [];
//            var transcript = [];
//            rows.forEach(function getText(row) {
//                var cols = row.split(",");
//                var participantNo = cols[0];
//                var startTime = cols[1];
//                var text = cols[2];
//                var endTime = cols[3];
//                var time = startTime.split(":");
//                var min = parseFloat(time[0]);
//                var sec = parseFloat(time[1]);
//                var startTimeSec = min*60 + sec;
//                participants.push(participantNo); // add participant speaking to list
//                dialogueTimes.push(startTimeSec); // add transcript times to list
//                transcript.push(text);
//            });
//            participantsList = participants;
//            dialogueTimesList = dialogueTimes;
//            transcriptList = transcript;
//        });
//        console.log("findDialogueTimes: participants, dialogueTimes, transcript", participantsList, dialogueTimesList, transcriptList);
////        return participantsList, dialogueTimesList, transcriptList;
//    };
//    
//    // Transcript Table
//    function transcriptTable(findDialogueTimes) {
//        var participants = findDialogueTimes[0];
//        var dialogueTimes = findDialogueTimes[1];
//        var transcript = findDialogueTimes[2];
//        console.log("transcriptTable: participants, dialogueTimes, transcript", participants, dialogueTimes, transcript);
//        var html = '<table class="table">';
//        for (i = 0; i < dialogueTimes.length; i++) {
//            html += '<tr id="' + dialogueTimes[i] + '" class="' + participants[i] + '">';
//            html += "<td>" + text + "</td>";
//            html += "</tr>";
//        };
//        html += "</table>";
//        $(".transcript-container").append(html);
//    };
    
    
    
    
    // Transcript Table
//    function transcriptTable() {
    $.get('assets/D3_S1_timestamps.csv', function(data) {
        var html = '<table class="table">';
        var rows = data.split("\n");
        var participants =[];
        var dialogueTimes = [];
        var transcript =[];
        rows.forEach(function getText(row) {
            var cols = row.split(",");
//            console.log("row:cols", row, cols);
            var participantNo = cols[0];
            var startTime = cols[1];
            var text = cols[2];
            var endTime = cols[3];
            var time = startTime.split(":");
            var min = parseFloat(time[0]);
            var sec = parseFloat(time[1]);
//            console.log("min:sec:ms", min, sec);
            var startTimeSec = min*60 + sec;
//            console.log("startTime:startTimeSec", startTime, startTimeSec);
            participants.push(participantNo); // add participant speaking to list
            dialogueTimes.push(startTimeSec); // add transcript times to list
            transcript.push(text); // add dialogue text to list
            html += '<tr id="' + startTimeSec + '" class="' + participantNo + '">';
            html += "<td>" + text + "</td>";
            html += "</tr>";
        });
        html += "</table>";
        $(".transcript-container").html(html);  
//        console.log("dialogueTimes", dialogueTimes);
//        playTranscript(transcriptTimes);
        console.log("transcript", $(".transcript-container"));
    });
//    };
    
    function updateTranscriptTime() {
        var v = $("video")[0];
        var d = $(".transcript-container").html();
        console.log("dialogues", d);
//        v.currentTime
        v.ontimeupdate = function() {
            
        };
    };
    
    

    
//    dialogues = $(".transcript-container table").innerHTML;
//    console.log("dialogues", dialogues);
////    transcriptWrapper = document.querySelector('#transcriptWrapper');
//    video = document.querySelector('video');
//    prevDialogueTime = -1;    
    
    
//    function playTranscript(transcriptTimes) {
//        var currDialogueTime = Math.max.apply(Math, transcriptTimes.filter(function(v) {return v <= video.currentTime}));
// 
//        if(prevDialogueTime !== currDialogueTime) {
//            prevDialogueTime = currDialogueTime;
//            var currDialogue = dialogues[transcriptTimes.indexOf(currDialogueTime)];
//            console.log("currDialogueTime:currDialogue", currDialogueTime, currDialogue);
//            transcriptWrapper.scrollTop  = currDialogue.offsetTop - 50;  
//            var prevDialogue = $(".speaking")[0];
//            if(prevDialogue !== undefined)
//                prevDialogue.className = prevDialogue.className.replace("speaking",'');
//            currDialogue.className +=" speaking";
//        }
//    };
   
//    transcriptTable();
    updateTranscriptTime();
});