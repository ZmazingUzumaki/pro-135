function setup() {
    canvas = createCanvas(480, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,480);
    video.hide();
  }