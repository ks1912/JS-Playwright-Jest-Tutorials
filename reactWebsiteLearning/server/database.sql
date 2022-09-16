CREATE DATABASE employee;

CREATE TABLE emp_data(
    emp_id SERIAL PRIMARY KEY,
    emp_name VARCHAR(255),
    emp_designation VARCHAR(255),
    emp_field VARCHAR(255)
);