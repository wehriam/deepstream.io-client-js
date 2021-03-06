export declare enum EVENT {
    UNSOLICITED_MESSAGE = 0,
    IS_CLOSED = 1,
    MAX_RECONNECTION_ATTEMPTS_REACHED = 2,
    CONNECTION_ERROR = 3,
    ACK_TIMEOUT = 4,
    UNKNOWN_CORRELATION_ID = 5,
    HEARTBEAT_TIMEOUT = 6,
    LISTENER_EXISTS = 7,
    NOT_LISTENING = 8,
    RECORD_ALREADY_DESTROYED = 9,
    RECORD_DELETE_TIMEOUT = 10,
    CLIENT_OFFLINE = "client offline",
    INVALID_AUTHENTICATION_DETAILS = "INVALID_AUTHENTICATION_DETAILS",
    CONNECTION_LOST = "connectionLost",
    CONNECTION_REESTABLISHED = "connectionReestablished",
    CONNECTION_STATE_CHANGED = "connectionStateChanged",
    CLIENT_DATA_CHANGED = "clientDataChanged",
    REAUTHENTICATION_FAILURE = "reauthenticationFailure",
    AUTHENTICATION_TIMEOUT = "AUTHENTICATION_TIMEOUT",
    RECORD_ERROR = "error",
    RECORD_READY = "ready",
    RECORD_DELETED = "delete",
    RECORD_DISCARDED = "discard",
    RECORD_VERSION_EXISTS = "versionExists",
    RECORD_HAS_PROVIDER_CHANGED = "hasProviderChanged",
    RECORD_STATE_CHANGED = "onRecordStateChanged",
    ENTRY_ADDED_EVENT = "entry-added",
    ENTRY_REMOVED_EVENT = "entry-removed",
    ENTRY_MOVED_EVENT = "entry-moved",
}
export declare enum CONNECTION_STATE {
    CLOSING = "CLOSING",
    CLOSED = "CLOSED",
    AWAITING_CONNECTION = "AWAITING_CONNECTION",
    CHALLENGING = "CHALLENGING",
    AWAITING_AUTHENTICATION = "AWAITING_AUTHENTICATION",
    AUTHENTICATING = "AUTHENTICATING",
    OPEN = "OPEN",
    ERROR = "ERROR",
    RECONNECTING = "RECONNECTING",
    REDIRECTING = "REDIRECTING",
    CHALLENGE_DENIED = "CHALLENGE_DENIED",
    TOO_MANY_AUTH_ATTEMPTS = "TOO_MANY_AUTH_ATTEMPTS",
    AUTHENTICATION_TIMEOUT = "AUTHENTICATION_TIMEOUT",
}
