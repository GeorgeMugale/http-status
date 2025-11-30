# HTTP Status Handler

A lightweight, TypeScript-first response status handler for building consistent API responses. This package provides a standardized way to structure success and error responses in your Node.js applications, ensuring consistent response formats across your API endpoints.

## Why This Package?

### 🚫 Common Problem: Inconsistent Response Handling

In Express.js applications, developers often forget to set proper HTTP status codes or maintain consistent response structures:

```javascript
// ❌ Problematic pattern - inconsistent responses
app.get('/user', (req, res) => {
  try {
    const user = getUser();
    res.json(user); // Forgot to set status code!
  } catch (error) {
    res.json({ error: error.message }); // No status code, inconsistent structure
  }
});

app.post('/user', (req, res) => {
  try {
    const user = createUser();
    res.status(201).json({ data: user, message: "Created" }); // Different structure
  } catch (error) {
    res.status(500).json({ message: error.message }); // Yet another structure
  }
});
```

### ✅ Solution: Standardized Response Pattern

This package enforces consistency and prevents common mistakes:

```typescript
// ✅ Consistent pattern with HTTP Status Handler
app.get('/user', (req, res) => {
  const status = new Status();
  
  try {
    const user = getUser();
    status.successStatus({ 
      message: "User retrieved successfully", 
      payload: user 
    });
  } catch (error) {
    status.errorStatus(ErrorCode.NOT_FOUND);
  }
  
  return res.status(status.code).json(status); // Always proper status code + consistent structure
});
```

## Features

- ✅ **TypeScript Support**: Fully typed with generic support for payload data
- ✅ **Standardized Response Format**: Consistent structure for all API responses
- ✅ **HTTP Status Code Management**: Built-in handling for common HTTP status codes
- ✅ **Error Code Mapping**: Predefined error messages for standard HTTP error codes
- ✅ **Zero Dependencies**: Lightweight and framework-agnostic
- ✅ **Comprehensive Documentation**: Full JSDoc support with examples

## Installation

```bash
npm install http-status-handler
```

## Quick Start

```typescript
import { Status, ErrorCode } from 'http-status-handler';

// Simple usage
const success = Status.success("User created", { id: 1, name: "John" });
const error = Status.ERR(ErrorCode.NOT_FOUND);

// Advanced usage with instance
const status = new Status<{ userId: number }>();
status.successStatus({ 
  message: "Operation successful", 
  payload: { userId: 123 } 
});
```

## Real-World Example

Here's how this package improves code quality in a production scenario:

```typescript
import { Status, ErrorCode } from 'http-status-handler';
import { Request, Response } from 'express';

class AuthController {
  activate = async (req: Request, res: Response) => {
    const status = new Status();

    try {
      const isValid = await tokenSchema.isValid(req.params);

      if (isValid) {
        const { token, email } = req.params as { token: string; email: string };

        const userDump = await userDAO.selectDump(email);

        if (userDump) {
          const isMatch = await this.verifyToken(
            token,
            userDump.Activation_Hash
          );

          if (isMatch) {
            const result = await this.dao.insert({
              ...userDump,
              Verified: true,
              Active: true,
            });

            if (result) {
              this.dao.deleteDump(userDump.ID);

              Mailer.send({
                to: result.Email,
                subject: MailSubject.ACCOUNT_VERIFIED,
              });

              status.successStatus({
                message: "Account successfully verified.",
              });
            }
          } else {
            // Even if incorrect, maintain security by saying user cannot be found
            status.errorStatus(ErrorCode.NOT_FOUND);
          }
        } else {
          status.errorStatus(ErrorCode.NOT_FOUND);
        }
      } else {
        status.errorStatus(ErrorCode.BAD_REQUEST);
      }
    } catch (error) {
      console.error("error:", error);
      status.errorStatus(ErrorCode.INTERNAL_SERVER_ERROR);
    }

    // ✅ Always returns proper HTTP status code and consistent structure
    return res.status(status.code).json(status);
  };
}
```

### Benefits Demonstrated in This Example:

1. **Never Forget Status Codes**: The pattern enforces `res.status(status.code).json(status)`
2. **Consistent Structure**: All responses have the same `{ code, success, message, payload }` format
3. **Type Safety**: Generic types ensure payload consistency
4. **Security**: Proper error handling without leaking implementation details
5. **Maintainability**: Clear, predictable response patterns across all endpoints

## API Reference

### Status Class

The main class for creating standardized responses.

```typescript
const status = new Status<T>(); // T is the payload type
```

### Static Methods

#### `Status.success<T>(message: string, payload: T): Status<T>`
Creates a success status (201 Created) with message and payload.

#### `Status.ERR<T>(error: ErrorCode): Status<T>`
Creates an error status from an HTTP error code.

### Instance Methods

#### `successStatus(options: Partial<IStatus<T>>): void`
Sets the status to success with provided options.

#### `errorStatus(error: ErrorCode): void`
Sets the status to error based on HTTP error code.

#### `error(err: IHttpError): void`
Handles custom errors implementing IHttpError interface.

#### `genericError(err: Error): void`
Handles generic JavaScript errors as internal server errors.

### Error Codes

Comprehensive HTTP status code coverage:

```typescript
ErrorCode.OK                    // 200
ErrorCode.CREATED              // 201
ErrorCode.BAD_REQUEST          // 400
ErrorCode.UNAUTHORIZED         // 401
ErrorCode.FORBIDDEN            // 403
ErrorCode.NOT_FOUND            // 404
ErrorCode.VALIDATION_ERROR     // 422
ErrorCode.INTERNAL_SERVER_ERROR // 500
// ... and many more
```

## Response Structure

All responses follow this consistent format:

```typescript
{
  code: number;      // HTTP status code
  success: boolean;  // true for success, false for error
  message: string;   // Human-readable message
  payload: T | null; // Response data or null
}
```

## About This Project

### My First NPM Package! 🎉

While this might seem like a trivial project, I'm proud to publish it as my first NPM package. It represents:

- **Learning Journey**: Understanding the complete package creation and publishing process
- **Real Problem Solving**: Addressing inconsistent API response patterns I've encountered
- **Best Practices**: Implementing TypeScript, proper documentation, and testing
- **Community Contribution**: Sharing a solution that might help other developers

This package embodies the principle that even simple utilities can significantly improve code quality when they enforce good patterns and prevent common mistakes.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for suggestions.

## License

MIT © [Your Name]

---

**Never forget to set HTTP status codes again!** 🚀