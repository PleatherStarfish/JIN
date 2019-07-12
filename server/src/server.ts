import server from "./app";

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val; // named pipe
    }
    if (port >= 0) {
        return port; // port number
    }
    return false;
}

function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;
    switch (error.code) { // handle specific listen errors with friendly messages
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const port: number = normalizePort(process.env.PORT || 3001);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

server.on("error", onError);

