CREATE KEYSPACE IF NOT EXISTS grpcdemo WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE grpcdemo;

CREATE TABLE IF NOT EXISTS accounts (
  id UUID,
  firstName text,
  lastName text,
  PRIMARY KEY(id)
);