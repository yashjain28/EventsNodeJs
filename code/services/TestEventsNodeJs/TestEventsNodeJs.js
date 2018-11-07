function TestEventsNodeJs(req, resp) {
  const EventEmitter = EventsNodeJs();
  var ee = new EventEmitter();
  ee.on("message", function(text) {
    log(text);
    resp.success('Success');
  });
  ee.emit("message", "hello world");
}
