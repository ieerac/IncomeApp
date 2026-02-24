import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import crypto from 'node:crypto';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await prisma.$queryRaw`SELECT * FROM "user"`;
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

app.post('/users', async (req: Request, res: Response) => {
    try {
        const { email, name } = req.body;
        if (!email) return res.status(400).json({ error: "Email is required" });

        // Assuming UUID is generated on insert or by postgres if we made it default
        const id = crypto.randomUUID();

        await prisma.$executeRaw`INSERT INTO "user" (id, email, name, "created_at", "updated_at") VALUES (${id}, ${email}, ${name}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;
        res.status(201).json({ id, email, name });
    } catch (error: any) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Test Prisma server running on port ${PORT}`);
});
