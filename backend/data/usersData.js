import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "thesolveware@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Chia Yao Jun",
    email: "chiayaojun@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Yash Patel",
    email: "yashpatel@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
