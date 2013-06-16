function onDeviceReady() {
var options = {
frequency : 1000
};
navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}
function onSuccess(acceleration) {
document.getElementById('x').innerHTML = acceleration.x;
document.getElementById('y').innerHTML = acceleration.y;
document.getElementById('z').innerHTML = acceleration.z;
document.getElementById('timestamp').innerHTML = 
acceleration.timestamp;
}
function onError(error) {
alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}
function init() {
document.addEventListener("deviceready", onDeviceReady, false);
}