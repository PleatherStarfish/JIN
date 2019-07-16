import server from "./app";

function normalizePort(val: any): number {
    var port: number = parseInt(val, 10);
    if (isNaN(port)) {
        return val; // named pipe
    }
    if (port >= 0) {
        return port; // port number
    }
    throw "normalizePort error";
}

function onError(error: any): void {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind: string = typeof port === "string"
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

