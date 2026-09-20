const socket = io();

let local;
let remote;
let peerConnection;

const rtcSetting = {
    iceServers: [{urls: "stun:stun.l.google.com:19302"}],
};

const initialize = ()=>{
    navigator.mediaDevices.getUserMedia({
        audoo: true,
        video: true
    });

    initiateOffer();
}
const initateOffer = async () => {
    await createPeerConnection();
}
const createPeerConnectoin = async () => {
    peerConnection = new RTCPeerConnection(rtcSetting);
}
initialize();