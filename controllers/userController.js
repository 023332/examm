import User from '../models/User.js';
import { uploadProfilePicture } from '../services/fileUploadService.js';


export const uploadProfilePic = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const file = req.file; // The uploaded file

        if (!file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        const imageUrl = await uploadProfilePicture(file); // Upload the image and get the URL

        // Update the user's profile with the new image URL
        await User.update({ profilePicture: imageUrl }, { where: { id: userId } });

        return res.status(200).json({ message: 'Profile picture uploaded successfully.', imageUrl });
    } catch (error) {
        return res.status(500).json({ message: 'Error uploading profile picture.', error: error.message });
    }
};


export const getUserDetails = async (req, res) => {
    try {
        const userId = req.params.userId;

        const user = await User.findByPk(userId, {
            attributes: { exclude: ['password'] } // Exclude sensitive information
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving user details.', error: error.message });
    }
};

export class getUserProfile {
}

export class updateUserProfile {
}

export class uploadProfilePicture {
}