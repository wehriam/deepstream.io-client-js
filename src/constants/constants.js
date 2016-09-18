exports.CONNECTION_STATE = {};

exports.CONNECTION_STATE.CLOSED = 'CLOSED';
exports.CONNECTION_STATE.AWAITING_CONNECTION = 'AWAITING_CONNECTION';
exports.CONNECTION_STATE.CHALLENGING = 'CHALLENGING';
exports.CONNECTION_STATE.AWAITING_AUTHENTICATION = 'AWAITING_AUTHENTICATION';
exports.CONNECTION_STATE.AUTHENTICATING = 'AUTHENTICATING';
exports.CONNECTION_STATE.OPEN = 'OPEN';
exports.CONNECTION_STATE.ERROR = 'ERROR';
exports.CONNECTION_STATE.RECONNECTING = 'RECONNECTING';

exports.MESSAGE_SEPERATOR = String.fromCharCode( 30 ); // ASCII Record Seperator 1E
exports.MESSAGE_PART_SEPERATOR = String.fromCharCode( 31 ); // ASCII Unit Separator 1F

exports.TYPES = {};
exports.TYPES.STRING = 'S';
exports.TYPES.OBJECT = 'O';
exports.TYPES.NUMBER = 'N';
exports.TYPES.NULL = 'L';
exports.TYPES.TRUE = 'T';
exports.TYPES.FALSE = 'F';
exports.TYPES.UNDEFINED = 'U';

exports.TOPIC = {};
exports.TOPIC.CONNECTION = 'C';
exports.TOPIC.AUTH = 'A';
exports.TOPIC.ERROR = 'X';
exports.TOPIC.EVENT = 'E';
exports.TOPIC.RECORD = 'R';
exports.TOPIC.RPC = 'P';
exports.TOPIC.WEBRTC = 'W';
exports.TOPIC.PRIVATE = 'PRIVATE/';

exports.EVENT = {};
exports.EVENT.CONNECTION_ERROR = 'connectionError';
exports.EVENT.CONNECTION_STATE_CHANGED = 'connectionStateChanged';
exports.EVENT.MAX_RECONNECTION_ATTEMPTS_REACHED = 'MAX_RECONNECTION_ATTEMPTS_REACHED';
exports.EVENT.CONNECTION_AUTHENTICATION_TIMEOUT = 'CONNECTION_AUTHENTICATION_TIMEOUT';
exports.EVENT.ACK_TIMEOUT = 'ACK_TIMEOUT';
exports.EVENT.NO_RPC_PROVIDER = 'NO_RPC_PROVIDER';
exports.EVENT.RESPONSE_TIMEOUT = 'RESPONSE_TIMEOUT';
exports.EVENT.DELETE_TIMEOUT = 'DELETE_TIMEOUT';
exports.EVENT.UNSOLICITED_MESSAGE = 'UNSOLICITED_MESSAGE';
exports.EVENT.MESSAGE_DENIED = 'MESSAGE_DENIED';
exports.EVENT.MESSAGE_PARSE_ERROR = 'MESSAGE_PARSE_ERROR';
exports.EVENT.VERSION_EXISTS = 'VERSION_EXISTS';
exports.EVENT.NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';
exports.EVENT.MESSAGE_PERMISSION_ERROR = 'MESSAGE_PERMISSION_ERROR';
exports.EVENT.LISTENER_EXISTS = 'LISTENER_EXISTS';
exports.EVENT.NOT_LISTENING = 'NOT_LISTENING';
exports.EVENT.TOO_MANY_AUTH_ATTEMPTS = 'TOO_MANY_AUTH_ATTEMPTS';
exports.EVENT.IS_CLOSED = 'IS_CLOSED';
exports.EVENT.UNKNOWN_CALLEE = 'UNKNOWN_CALLEE';
exports.EVENT.RECORD_NOT_FOUND = 'RECORD_NOT_FOUND';
exports.EVENT.NOT_SUBSCRIBED = 'NOT_SUBSCRIBED';

exports.ACTIONS = {};
exports.ACTIONS.ACK = 'A';
exports.ACTIONS.REDIRECT = 'RED';
exports.ACTIONS.CHALLENGE = 'CH';
exports.ACTIONS.CHALLENGE_RESPONSE = 'CHR';
exports.ACTIONS.READ = 'R';
exports.ACTIONS.CREATE = 'C';
exports.ACTIONS.UPDATE = 'U';
exports.ACTIONS.PATCH = 'P';
exports.ACTIONS.DELETE = 'D';
exports.ACTIONS.SUBSCRIBE = 'S';
exports.ACTIONS.UNSUBSCRIBE = 'US';
exports.ACTIONS.HAS = 'H';
exports.ACTIONS.SNAPSHOT = 'SN';
exports.ACTIONS.INVOKE = 'I';
exports.ACTIONS.SUBSCRIPTION_FOR_PATTERN_FOUND = 'SP';
exports.ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED = 'SR';
exports.ACTIONS.SUBSCRIPTION_HAS_PROVIDER = 'SH';
exports.ACTIONS.LISTEN = 'L';
exports.ACTIONS.UNLISTEN = 'UL';
exports.ACTIONS.LISTEN_ACCEPT = 'LA';
exports.ACTIONS.LISTEN_REJECT = 'LR';
exports.ACTIONS.PROVIDER_UPDATE = 'PU';
exports.ACTIONS.QUERY = 'Q';
exports.ACTIONS.CREATEORREAD = 'CR';
exports.ACTIONS.EVENT = 'EVT';
exports.ACTIONS.ERROR = 'E';
exports.ACTIONS.REQUEST = 'REQ';
exports.ACTIONS.RESPONSE = 'RES';
exports.ACTIONS.REJECTION = 'REJ';

//WebRtc
exports.ACTIONS.WEBRTC_REGISTER_CALLEE = 'RC';
exports.ACTIONS.WEBRTC_UNREGISTER_CALLEE = 'URC';
exports.ACTIONS.WEBRTC_OFFER = 'OF';
exports.ACTIONS.WEBRTC_ANSWER = 'AN';
exports.ACTIONS.WEBRTC_ICE_CANDIDATE = 'IC';
exports.ACTIONS.WEBRTC_CALL_DECLINED = 'CD';
exports.ACTIONS.WEBRTC_CALL_ENDED = 'CE';
exports.ACTIONS.WEBRTC_LISTEN_FOR_CALLEES = 'LC';
exports.ACTIONS.WEBRTC_UNLISTEN_FOR_CALLEES = 'ULC';
exports.ACTIONS.WEBRTC_ALL_CALLEES = 'WAC';
exports.ACTIONS.WEBRTC_CALLEE_ADDED = 'WCA';
exports.ACTIONS.WEBRTC_CALLEE_REMOVED = 'WCR';
exports.ACTIONS.WEBRTC_IS_ALIVE = 'WIA';

exports.CALL_STATE = {};
exports.CALL_STATE.INITIAL = 'INITIAL';
exports.CALL_STATE.CONNECTING = 'CONNECTING';
exports.CALL_STATE.ESTABLISHED = 'ESTABLISHED';
exports.CALL_STATE.ACCEPTED = 'ACCEPTED';
exports.CALL_STATE.DECLINED = 'DECLINED';
exports.CALL_STATE.ENDED = 'ENDED';
exports.CALL_STATE.ERROR = 'ERROR';
