import multer from 'multer';
import path from 'path';
import { getJson } from "serpapi";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Use the original file extension
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({ storage: storage });

const imageController = {
    uploadImage: async (req, res) => {
        // req.file will contain the uploaded file information
        if (!req.file) {
            return res.status(400).redirect('/imageosint'); // Redirect if no file uploaded
        }
        const imageUrl = `${req.protocol}://192.168.26.46:4002/uploads/${req.file.filename}`;
        try {
            getJson({
                engine: "google_reverse_image",
                image_url: imageUrl,
                api_key: "c135fa039a0d2f01447e4fea7398b8edd044dd280b2642abceb97fbae5115fd1"
              }, (json) => {
                console.log(json);
                res.status(200).send({ imageUrl: imageUrl, data: json.image_results });
              });


            }
        catch (error) {
            console.error('Error uploading image:', error);
            return res.status(500).json({ error: 'An error occurred while searching the image.' });
        }

        
    }
};

export { upload, imageController };
