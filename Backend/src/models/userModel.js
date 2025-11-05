import client from "../db/index.js";

const mapRowToUser = (row) => {
  if (!row) return null;
  return {
    id: row.id,
    fullname: row.fullname,
    email: row.email,
    username: row.username,
    passwordHash: row.password_hash,
    createdAt: row.created_at,
  };
};

const createUser = async ({ fullname, email, username, passwordHash }) => {
  const { rows } = await client.query(
    `INSERT INTO users (fullname, email, username, password_hash)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [fullname, email, username, passwordHash]
  );

  return mapRowToUser(rows[0]);
};

const findByEmail = async (email) => {
  const { rows } = await client.query("SELECT * FROM users WHERE email = $1", [email]);
  return mapRowToUser(rows[0]);
};

const findByUsername = async (username) => {
  const { rows } = await client.query("SELECT * FROM users WHERE username = $1", [username]);
  return mapRowToUser(rows[0]);
};

const findById = async (id) => {
  const { rows } = await client.query("SELECT * FROM users WHERE id = $1", [id]);
  return mapRowToUser(rows[0]);
};

export { createUser, findByEmail, findByUsername, findById };

