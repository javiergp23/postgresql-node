CREATE TABLE users (
    
    id serial PRIMARY KEY,

    name varchar(255) NOT NULL,

    email varchar(255) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES ('Javier', 'javier@gmail.com');