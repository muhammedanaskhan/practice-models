import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        }
    }, 
    {timestamps: true}
)

export const Category = mongoose.model("Category", CategorySchema)