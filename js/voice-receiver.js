var socket = io.connect("http://localhost:4200");
socket.on("connect", function () {
    console.log("Connected!");
});
socket.on("tweet", function(tweet) {
    // todo: add the tweet as a DOM node

    console.log("tweet from", tweet.username);
    console.log("contents:", tweet.text);
});
socket.on('voice_control', function(msg){

    console.log("voice control received: " + msg);
    goTo(msg);

});

console.log("Started...");
