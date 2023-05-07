const AWS = require('aws-sdk');
const axios = require('axios');

const s3 = new AWS.S3();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/...'; // Replace with the appropriate YouTube API URL
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;

exports.handler = async (event) => {
  try {
    const response = await axios.get(`${YOUTUBE_API_URL}?key=${YOUTUBE_API_KEY}`);
    const jsonData = response.data;

    const params = {
      Bucket: S3_BUCKET_NAME,
      Key: 'youtube_data.json',
      Body: JSON.stringify(jsonData),
      ContentType: 'application/json',
    };

    await s3.putObject(params).promise();
    console.log('Data successfully saved to S3.');

  } catch (error) {
    console.error('Error fetching data from YouTube API or saving to S3:', error);
    throw error;
  }
};
