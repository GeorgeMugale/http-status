import { ErrorCode } from "./http.errors.js";
/**
 * Custom error interface that includes a status code
 * @extends Error
 */
export interface IHttpError extends Error {
    /** HTTP status code associated with the error */
    code: number;
}
/**
 * Standard interface for API response structure
 * @template T - The type of the payload data (defaults to any)
 */
export interface IStatus<T = any> {
    /**
     * The HTTP status code of the response
     */
    code: number;
    /**
     * Indicates if the request was successful
     */
    success: boolean;
    /**
     * Human-readable message describing the result
     */
    message: string;
    /**
     * Optional payload data returned from the request
     */
    payload: T | null;
}
/**
 * A standardized HTTP status response handler for building consistent API responses.
 * This class provides methods to create success and error responses with proper typing.
 *
 * @template T - The type of the payload data (defaults to any)
 *
 * @example
 * ```typescript
 * // Success response
 * const success = Status.success("User created", { id: 1, name: "John" });
 *
 * // Error response from error code
 * const error = Status.ERR(ErrorCode.NOT_FOUND);
 *
 * // Instance usage
 * const status = new Status<{ userId: number }>();
 * status.successStatus({
 *   message: "Operation successful",
 *   payload: { userId: 123 }
 * });
 * ```
 */
export declare class Status<T = any> implements IStatus<T> {
    /** HTTP status code */
    code: number;
    /** Indicates if the request was successful */
    success: boolean;
    /** Human-readable message */
    message: string;
    /** Response payload data */
    payload: T | null;
    /**
     * Creates a new Status instance with default values
     * Defaults to 400 Bad Request error state
     */
    constructor();
    /**
     * Internal method to set message and payload properties
     * @param options - Partial status properties to update
     * @param options.message - The message to set
     * @param options.payload - The payload data to set
     */
    private set;
    /**
     * Sets the status to success with provided options
     * @param options - Success response options
     * @param options.message - Success message
     * @param options.payload - Success payload data
     */
    successStatus(options: Partial<IStatus<T>>): void;
    /**
     * Sets the status to error based on an HTTP error code
     * Automatically sets the appropriate error message
     * @param error - The HTTP error code
     */
    errorStatus(error: ErrorCode): void;
    /**
     * Static factory method to create a success status
     * @template T - The type of the payload data
     * @param message - Success message
     * @param payload - Success payload data
     * @returns A new Status instance configured for success
     *
     * @example
     * ```typescript
     * const status = Status.success("User created", { id: 1, name: "John" });
     * ```
     */
    static success<T>(message: string, payload: T): Status<T>;
    /**
     * Static factory method to create an error status from an HTTP error code
     * @template T - The type of the payload data
     * @param error - The HTTP error code
     * @returns A new Status instance configured for error
     *
     * @example
     * ```typescript
     * const status = Status.ERR(ErrorCode.NOT_FOUND);
     * ```
     */
    static ERR<T>(error: ErrorCode): Status<T>;
    /**
     * Handles custom errors that implement the IHttpError interface
     * @param err - Custom error object with code property
     *
     * @example
     * ```typescript
     * const customError = new Error("Not authorized") as IHttpError;
     * customError.code = 401;
     * status.error(customError);
     * ```
     */
    error(err: IHttpError): void;
    /**
     * Handles generic JavaScript errors as internal server errors
     * Use this as a fallback for unexpected errors
     * @param err - Generic JavaScript Error object
     *
     * @example
     * ```typescript
     * try {
     *   // some operation
     * } catch (err) {
     *   status.genericError(err);
     * }
     * ```
     */
    genericError(err: Error): void;
}
