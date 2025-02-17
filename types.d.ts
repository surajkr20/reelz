import { Connection } from "mongoose";

// Define a global interface for caching the MongoDB connection
declare global {
    var mongoose : {
        conn: Connection | null
        promise: Promise<Connection> | null
    }
}

// Export an empty object to ensure this file is treated as a module
export {};

