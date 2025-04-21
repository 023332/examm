import { v7 as uuidV7 } from 'uuid';
import path from 'path';

// Function to generate a unique filename for uploaded files
export const generateUniqueFileName = (originalName) => {
    const extension = path.extname(originalName);
    const uniqueName = `${uuidV7()}${extension}`;
    return uniqueName;
};

// Function to validate image file types
export const validateImageFileType = (file) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return allowedTypes.includes(file.mimetype);
};

// Function to construct full URL for uploaded files
export const constructFileUrl = (filePath) => {
    return `${process.env.BASE_URL}/uploads/${filePath}`;
};

