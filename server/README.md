# To do list REST API

## Models

Task
- title: string, required, maxLength: 50
- creationDate: date, required, default: today

## API Endpoints

- GET - Load data.
- POST - Create data. Might include request body.
- PUT - Insert data. Might include request body.
- PATCH - Update data. Might include request body.
- DELETE - Delete data. Might include request body.
- [OPTIONS]

| METHOD | PATH         | DESCRIPTION       |
| GET    | '/tasks'     | List all tasks    |
| POST   | '/tasks'     | Create a new task |
| GET    | '/tasks/:id' | Load single task  |
| PATCH  | '/tasks/:id' | Edit single task  |
| DELETE | '/tasks/:id' | Delete a task     |
