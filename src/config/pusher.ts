import Pusher from 'pusher';


const pusher = new Pusher({
    appId: '1070018',
    key: '3277987e3192daa36880',
    secret: 'c6f868fc63235c034e15',
    cluster: 'eu',
    encrypted: true
});

export default pusher