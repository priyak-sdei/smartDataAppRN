let socket: WebSocket | null = null;
let isConnected = false;

const WEBSOCKET_URL = 'wss://sdeiaiml.com:7004/ws';

export const socketInit = () => {
    if (!socket) {
        const wsUrl = `${WEBSOCKET_URL}/15`;

        socket = new WebSocket(wsUrl);

        socket.onopen = () => {
            isConnected = true;
            console.log('WebSocket connected');
        };

        socket.onclose = () => {
            isConnected = false;
            socket = null;
            console.log('WebSocket disconnected');
            // reconnect();
        };

        socket.onerror = error => {
            // const errorRes = JSON.parse(error)
            console.error('WebSocket error:', error);
        };

        // socket.onmessage = event => {
        //     // Handle incoming messages
        //     console.log('event', event);
        //     // const data = JSON.parse(event.data);
        //     // console.log('Message from server:', data);
        // };
    }
    return socket;
};

export const socketDisconnect = () => {
    if (socket) {
        socket.close();
        socket = null;
        isConnected = false;
        console.log('WebSocket manually disconnected');
    }
};

const reconnect = () => {
    console.log('reconnectBlock');
    setTimeout(() => {
        console.log('Reconnecting WebSocket...');
        console.log('socket--reconnect block', socket);
        const socketReconn = socketInit();
        console.log('socketReconn--recoonect block', socketReconn);
    }, 3000); // Retry after 3 seconds
};

export const fetchImage = onMessageCallback => {
    if (socket) {
        const handleMessage = event => {
            onMessageCallback(event.data); // Call the callback with received data
        };

        socket.onmessage = handleMessage;

        // Return a cleanup function to remove the listener
        return () => {
            socket.onmessage = null;
        };
    } else {
        console.log('Error initializing socket');
        return null;
    }
};
