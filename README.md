# Spring Boot Webapp - Student CRUD (Frontend + REST + SQL)

This is a simple full-stack example you can upload to GitHub and share.  
It contains:
- Spring Boot backend (REST API) - Java, Spring Data JPA
- Static frontend (HTML, CSS, JS) under `src/main/resources/static`
- SQL schema file `schema.sql`
- Configured to use **H2** for quick testing and **MySQL** for production (update application.properties)

## How to run (quick)
1. Install Java 11+ and Maven.
2. (Optional) If you want MySQL, create a database and update `src/main/resources/application.properties` with your credentials.
3. Build and run:
   ```bash
   mvn clean package
   mvn spring-boot:run
   ```
4. Open `http://localhost:8080/` to access the frontend.

## What is included
- Backend endpoints:
  - `GET /api/students` - list
  - `GET /api/students/{id}` - get
  - `POST /api/students` - create
  - `PUT /api/students/{id}` - update
  - `DELETE /api/students/{id}` - delete

Frontend is a simple single-page UI that calls these endpoints using Fetch API.

You can upload this project folder to GitHub as-is.

