-- Active: 1782948120895@@127.0.0.1@5432@g108
CREATE TABLE countries (
    id INTEGER,
    name VARCHAR,
    iso3 CHAR(3),
    capital VARCHAR,
    currency CHAR(3),
    currency_name VARCHAR,
    tid CHAR(3),
    region VARCHAR,
    subregion VARCHAR,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8)
);

CREATE TABLE states (
    id INTEGER,
    name VARCHAR,
    country_id INTEGER,
    state_code CHAR(5),
    state_type VARCHAR,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8)
);

CREATE TABLE cities (
    id INTEGER,
    name VARCHAR,
    state_id INTEGER,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8)
);

