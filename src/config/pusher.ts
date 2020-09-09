import Pusher from 'pusher';


const pusher = new Pusher({
    appId: process.env.APPID as string,
    key: process.env.KEY as string,
    secret: process.env.c6f868fc63235c034e15 as string,
    cluster: process.env.eu as string,
    encrypted: true
});