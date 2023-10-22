/*  
sudo psql -U offerdzuser -h localhost -d offerdz -a -f '/home/lyes/Desktop/offerdz/db/db.sql'
*/
CREATE DATABASE if not exists offerdz;

CREATE TABLE if not exists users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(256) NOT NULL,
    created_at timestamp with time zone default now(),
    constraint uk_users_email unique (email)
);


CREATE TABLE if not exists products (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC(9,2) NOT NULL,
    image_link TEXT,
    saller_id BIGINT NOT NULL,
    FOREIGN KEY (saller_id) REFERENCES users(id)
);


CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");