# AWS Cloud Dev Image Processing Project by Doug Brown
(Part of the Udacity Cloud Developer program)

## Overview
This project is focused on developing an image processing service using AWS cloud services. The application will leverage Elastic Beanstalk to deploy a Node service application for processing and returning an image from a URL provided by the user.

## Features
- **Image Upload**: Users can upload images to the cloud.
- **Image Processing**: Apply various image processing techniques such as resizing, filtering, and format conversion.

## Technologies Used
- **AWS Elastic Beanstalk**: For creating and deploying environment and application.
- **Node**: For serverless image processing.

## Setup Instructions
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/aws_cloud_dev_image_processing_project.git
    cd aws_cloud_dev_image_processing_project
    ```

2. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3. **Deploy the Elastic Beanstalk stack**:
- Use "eb init" to initialize environment parameters.
- Use "eb create" to create environment in AWS.
- Use "eb deploy" to deploy application.

4. **Upload an image**:
    Use the provided API endpoint to upload an image.

## Usage
1. **Upload an Image**: Use the API endpoint to upload an image.
2. **Process the Image**: The image will be processed automatically using Node.
3. **Retrieve the Processed Image**: The processed image will be returned and then deleted from the Node server.