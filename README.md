# LegalPlace Pharmacy System

A TypeScript implementation of a pharmacy inventory management system that handles different types of drugs with various expiration and benefit rules.

## Technical Decisions & Developer Notes

As the developer of this refactoring project, I made a strategic decision to convert the entire codebase to TypeScript rather than using Babel. Here's my reasoning:

1. **Confidence in Timeline**: Despite the 2-hour constraint, my experience with TypeScript gave me confidence that I could complete the refactoring, implement new features, and add tests within the deadline.
2. **Long-term Benefits**: While a Babel setup might have been quicker initially, TypeScript provides:
   - Immediate type safety
   - Better IDE support
   - Easier maintenance
   - More robust code base
3. **Development Speed**: The initial investment in TypeScript setup was offset by faster development time due to better tooling and type inference.

This decision proved successful as the project was completed within the allocated time while providing a more maintainable and type-safe codebase.

## Features

- Manages multiple drug types with different rules
- Handles expiration dates and benefit values
- Supports special drugs:
  - Herbal Tea (increases in benefit over time)
  - Magic Pill (never expires)
  - Fervex (complex benefit rules)
  - Dafalgan (degrades twice as fast)

## Prerequisites

- Docker
- Docker Compose

## Getting Started

### Using Docker

Build the image:
```bash
docker build -t pharmacy-system .
```

Run the container:
```bash
docker run pharmacy-system
```

### Using Docker Compose

Run the entire application:
```bash
docker-compose up
```

## Development

### Running Tests
```bash
yarn test
```

### Linting
```bash
yarn lint
```

### Building
```bash
yarn build
```

## Project Timeline

| Time          | Duration | Task                                        |
|---------------|----------|---------------------------------------------|
| 9:50 - 10:15  | 25 mins  | TypeScript Refactoring                      |
| 10:30 - 11:00 | 30 mins  | Test Setup & Structure Refactoring          |
| 11:00 - 11:20 | 20 mins  | Dafalgan Feature & CI Implementation        |
| 11:20 - 11:30 | 10 mins  | Code Cleanup & Documentation                |

## Technical Stack

- TypeScript
- Jest for testing
- ESLint for code quality
- Docker for containerization
- GitHub Actions for CI/CD

## Contributing

Please ensure all tests pass and the output.json remains unchanged before submitting a PR.