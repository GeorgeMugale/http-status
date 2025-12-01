"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = exports.ErrorCode = void 0;
/**
 * Enum representing standard HTTP error codes used throughout the application.
 * Each entry corresponds to a common HTTP status code for error handling.
 */
var ErrorCode;
(function (ErrorCode) {
    /**
     * 200 - The request succeeded
     */
    ErrorCode[ErrorCode["OK"] = 200] = "OK";
    /**
     * 201 - The request succeeded and a resource was created
     */
    ErrorCode[ErrorCode["CREATED"] = 201] = "CREATED";
    /**
     * 204 - The request succeeded but there's no content to return
     */
    ErrorCode[ErrorCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    /**
     * 400 - The request could not be understood or was missing required parameters.
     */
    ErrorCode[ErrorCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    /**
     * 401 - Authentication failed or user does not have permissions for the requested operation.
     */
    ErrorCode[ErrorCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    /**
     * 402 - Payment required
     */
    ErrorCode[ErrorCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    /**
     * 403 - Authentication succeeded but the authenticated user does not have access to the resource.
     */
    ErrorCode[ErrorCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    /**
     * 404 - The requested resource could not be found.
     */
    ErrorCode[ErrorCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    /**
     * 405 - The HTTP method is not supported for this resource
     */
    ErrorCode[ErrorCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    /**
     * 408 - The request timed out
     */
    ErrorCode[ErrorCode["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    /**
     * 409 - A conflict occurred, such as a duplicate entry or resource already existing.
     */
    ErrorCode[ErrorCode["CONFLICT"] = 409] = "CONFLICT";
    /**
     * 410 - The requested resource is gone and won't be available again
     */
    ErrorCode[ErrorCode["GONE"] = 410] = "GONE";
    /**
     * 413 - The request payload is too large
     */
    ErrorCode[ErrorCode["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    /**
     * 415 - The media type is not supported
     */
    ErrorCode[ErrorCode["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    /**
     * 422 - The request was well-formed but contained semantic errors (e.g., validation errors).
     */
    ErrorCode[ErrorCode["VALIDATION_ERROR"] = 422] = "VALIDATION_ERROR";
    /**
     * 429 - Too many requests - rate limiting
     */
    ErrorCode[ErrorCode["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    /**
     * 500 - A generic error occurred on the server.
     */
    ErrorCode[ErrorCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    /**
     * 501 - The server does not support the functionality required to fulfill the request
     */
    ErrorCode[ErrorCode["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    /**
     * 502 - Bad gateway - invalid response from upstream server
     */
    ErrorCode[ErrorCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    /**
     * 503 - The server is not ready to handle the request
     */
    ErrorCode[ErrorCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    /**
     * 504 - Gateway timeout
     */
    ErrorCode[ErrorCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
exports.ErrorMessages = {
    [ErrorCode.OK]: "Request succeeded",
    [ErrorCode.CREATED]: "Resource created successfully",
    [ErrorCode.NO_CONTENT]: "Request succeeded, no content to return",
    [ErrorCode.BAD_REQUEST]: "Bad request. Please check your input.",
    [ErrorCode.UNAUTHORIZED]: "Unauthorized. Please log in.",
    [ErrorCode.PAYMENT_REQUIRED]: "Payment required.",
    [ErrorCode.FORBIDDEN]: "Forbidden. You do not have access.",
    [ErrorCode.NOT_FOUND]: "Resource not found.",
    [ErrorCode.METHOD_NOT_ALLOWED]: "Method not allowed.",
    [ErrorCode.REQUEST_TIMEOUT]: "Request timeout.",
    [ErrorCode.CONFLICT]: "Conflict. This already exists.",
    [ErrorCode.GONE]: "Resource is gone and will not be available again.",
    [ErrorCode.PAYLOAD_TOO_LARGE]: "Request payload too large.",
    [ErrorCode.UNSUPPORTED_MEDIA_TYPE]: "Unsupported media type.",
    [ErrorCode.VALIDATION_ERROR]: "Validation failed.",
    [ErrorCode.TOO_MANY_REQUESTS]: "Too many requests. Please try again later.",
    [ErrorCode.INTERNAL_SERVER_ERROR]: "Internal server error.",
    [ErrorCode.NOT_IMPLEMENTED]: "Feature not implemented.",
    [ErrorCode.BAD_GATEWAY]: "Bad gateway.",
    [ErrorCode.SERVICE_UNAVAILABLE]: "Service unavailable.",
    [ErrorCode.GATEWAY_TIMEOUT]: "Gateway timeout.",
};
