# Thief Detector

Thief Detector is a web application built with Next.js, React Webcam, and TensorFlow's COCO-SSD model. It allows users to detect intruders and potential thieves using their device's webcam.

## Live Demo: https://thief-detector.vercel.app/

## Features

- Real-time object detection using TensorFlow's COCO-SSD model.
- Utilizes the device's webcam for live video input.
- Alerts users when potential intruders are detected.
- Simple and intuitive user interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhik-Develops/thief-detector.git
   ```

2. Navigate to the project directory:

   ```bash
   cd thief-detector
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and visit `http://localhost:3000` to access the application.

3. Grant permission to access your webcam when prompted.

4. The application will start detecting objects in real-time using your webcam feed. If potential intruders are detected, the system will alert you.

## Configuration

- You can adjust various settings and parameters in the source code to customize the behavior of the Thief Detector application.

## Technologies Used

- Next.js: A React framework for building server-side rendered (SSR) and statically generated web applications.
- React Webcam: A React component for accessing the user's webcam.
- TensorFlow.js: A JavaScript library for training and deploying machine learning models in the browser and on Node.js.
- COCO-SSD: A pre-trained object detection model for identifying and localizing multiple objects in an image or video.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new pull request.
