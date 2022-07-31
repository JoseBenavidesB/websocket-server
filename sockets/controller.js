

const socketController = (socket) => {
    console.log( 'Connected client', socket.id );

    socket.on('disconnect', () => {
        //console.log('Disconnect client', socket.id);
    });

    //custom event
    socket.on( 'send-message', (payload, callback) => {
        const id = 123456;
        callback( id );

        //send message everyone
        socket.broadcast.emit( 'sent-message', payload );
    })
};

module.exports = {
    socketController,
}