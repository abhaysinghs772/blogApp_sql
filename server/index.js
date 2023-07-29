/* Global imports */
import express from "express";
import cors from "cors";

/* Routes */
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";

const port = 3000;
const app = express();

/* ALLOW CORs */
app.use(cors());

app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/posts', postsRoutes);

app.listen(port, () => {
    console.log(`server is up at port : ${port}`);
})