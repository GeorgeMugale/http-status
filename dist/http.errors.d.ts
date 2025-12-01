/**
 * Enum representing standard HTTP error codes used throughout the application.
 * Each entry corresponds to a common HTTP status code for error handling.
 */
export declare enum ErrorCode {
    /**
     * 200 - The request succeeded
     */
    OK = 200,
    /**
     * 201 - The request succeeded and a resource was created
     */
    CREATED = 201,
    /**
     * 204 - The request succeeded but there's no content to return
     */
    NO_CONTENT = 204,
    /**
     * 400 - The request could not be understood or was missing required parameters.
     */
    BAD_REQUEST = 400,
    /**
     * 401 - Authentication failed or user does not have permissions for the requested operation.
     */
    UNAUTHORIZED = 401,
    /**
     * 402 - Payment required
     */
    PAYMENT_REQUIRED = 402,
    /**
     * 403 - Authentication succeeded but the authenticated user does not have access to the resource.
     */
    FORBIDDEN = 403,
    /**
     * 404 - The requested resource could not be found.
     */
    NOT_FOUND = 404,
    /**
     * 405 - The HTTP method is not supported for this resource
     */
    METHOD_NOT_ALLOWED = 405,
    /**
     * 408 - The request timed out
     */
    REQUEST_TIMEOUT = 408,
    /**
     * 409 - A conflict occurred, such as a duplicate entry or resource already existing.
     */
    CONFLICT = 409,
    /**
     * 410 - The requested resource is gone and won't be available again
     */
    GONE = 410,
    /**
     * 413 - The request payload is too large
     */
    PAYLOAD_TOO_LARGE = 413,
    /**
     * 415 - The media type is not supported
     */
    UNSUPPORTED_MEDIA_TYPE = 415,
    /**
     * 422 - The request was well-formed but contained semantic errors (e.g., validation errors).
     */
    VALIDATION_ERROR = 422,
    /**
     * 429 - Too many requests - rate limiting
     */
    TOO_MANY_REQUESTS = 429,
    /**
     * 500 - A generic error occurred on the server.
     */
    INTERNAL_SERVER_ERROR = 500,
    /**
     * 501 - The server does not support the functionality required to fulfill the request
     */
    NOT_IMPLEMENTED = 501,
    /**
     * 502 - Bad gateway - invalid response from upstream server
     */
    BAD_GATEWAY = 502,
    /**
     * 503 - The server is not ready to handle the request
     */
    SERVICE_UNAVAILABLE = 503,
    /**
     * 504 - Gateway timeout
     */
    GATEWAY_TIMEOUT = 504
}
export declare const ErrorMessages: Record<ErrorCode, string>;
