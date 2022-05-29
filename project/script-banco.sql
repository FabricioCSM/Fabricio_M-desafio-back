DROP database IF EXISTS qesh;
CREATE database IF NOT EXISTS qesh;


CREATE TABLE IF NOT EXISTS qesh.UserModels (
  id VARCHAR(100) PRIMARY KEY NOT NULL,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  createdAt DATE NOT NULL,
  updatedAt DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS qesh.PurchaseModels (
  id VARCHAR(100) PRIMARY KEY NOT NULL,
  userId VARCHAR(100)
  productName VARCHAR(100) NOT NULL,
  quantity INT NOT NULL,
  total FLOAT NOT NULL,
  createdAt DATE NOT NULL,
  updatedAt DATE NOT NULL
);

