import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import pkg from 'jsonwebtoken';

import Course from "../../courses/model/coursesModel.js";
import Video from "../../videos/models/video.model.js";
const { sign } = pkg;

const userController = {
  createUser: async (req, res) => {
    const { email, password, name } = req.body;
    console.log(email, password, name);
    try {
      // Hash the user's password
      const hashedPassword = await bcrypt.hash(password, 10); // Use bcrypt to hash the password

      // Hardcoded courseId for testing
      const courseId = "unique_course_id_123";
      const course = await Course.findOne({ courseId });
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      // Hardcoded videoId for testing
      const videoId = "67f9d396a23041a4337b6739";
      const video = await Video.findById(videoId);
      if (!video) {
        return res.status(404).json({ message: "Video not found" });
      }

      // Create the user entry in the database
      const user = await userModel.create({
        email: email,
        password: hashedPassword,
        name: name,
        walletBalance: 100,
        courses: [course._id],
        videos: [
          {
            videoId: video._id,
            lastWatchTime: 0,
            segmentsWatchedArrayHash: new Array(Math.floor(video.duration / 5)).fill(0), // Segments hash dynamically
          }
        ],
      });

      // Return the created user as a response
      res.status(201).json(user);
    } catch (error) {
      // Debugging for errors
      console.error('Error creating user:', error);
      res.status(500).json({ error: error.message });
    }
  },

  signinUser: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Compare the hashed password
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Generate JWT token
      const token = sign({ user: user.email }, process.env.SECRET_KEY, { expiresIn: "7d" });

      // Return token in a cookie
      return res.cookie('tokenjwt', token, { httpOnly: false, secure: false, sameSite: 'none' })
        .status(200)
        .send({ message: "Login Success", user: user, token: token });
    } catch (error) {
      console.error('Error signing in user:', error);
      res.status(500).json({ error: error.message });
    }
  },

  getUser: async (req, res) => {
    console.log(req.user);
    const email = req.user.user;
    try {
      const user = await userModel.findOne({ email: email }).populate('courses videos.videoId');
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: error.message });
    }
  },
};

export default userController;