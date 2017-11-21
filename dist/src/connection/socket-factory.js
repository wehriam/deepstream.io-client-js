"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_parser_1 = require("../../binary-protocol/src/message-parser");
const message_builder_1 = require("../../binary-protocol/src/message-builder");
const message_constants_1 = require("../../binary-protocol/src/message-constants");
const NodeWebSocket = require("ws");
exports.socketFactory = (url, options) => {
    const socket = new NodeWebSocket(url, options);
    // tslint:disable-next-line:no-empty
    socket.onparsedmessage = () => { };
    socket.onmessage = (raw) => {
        const parseResults = message_parser_1.parse(raw.data);
        parseResults.forEach(element => {
            // log('<<<', element as Message)
        });
        socket.onparsedmessages(parseResults);
    };
    socket.sendParsedMessage = (message) => {
        if (message.topic === message_constants_1.TOPIC.CONNECTION && message.action === message_constants_1.CONNECTION_ACTIONS.CLOSING) {
            socket.onparsedmessages([{ topic: message_constants_1.TOPIC.CONNECTION, action: message_constants_1.CONNECTION_ACTIONS.CLOSED }]);
            socket.close();
            return;
        }
        message.data = JSON.stringify(message.parsedData);
        // log('>>>', message)
        socket.send(message_builder_1.getMessage(message, false));
    };
    return socket;
};
function log(direction, message) {
    if (message.action !== message_constants_1.CONNECTION_ACTIONS.PONG && message.action !== message_constants_1.CONNECTION_ACTIONS.PING) {
        console.log(direction, message_constants_1.TOPIC[message.topic], message_constants_1.ACTIONS[message.topic][message.action], message_constants_1.ACTIONS[message.topic][message.originalAction], message.parsedData, message.data, message.name);
    }
}
//# sourceMappingURL=socket-factory.js.map