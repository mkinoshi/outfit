import { RNS3 } from 'react-native-aws3';
import axios from 'axios';
const dbURL = 'https://vast-beach-20437.herokuapp.com';

export const uploadPicturesThunk = (first, second, id) => (dispatch) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

    const file2 = {
    uri: second,
    name: "image" + getRandomInt(0,10000) + ".png",
    type: "image/png"
  }
    const options2 = {
    keyPrefix: "uploads/",
    bucket: "horizons-hackathon-snackchat",
    region: "us-west-1",
    accessKey: "AKIAJ6TQHMYEL7WOGWZA",
    secretKey: "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",
    awsURL: "https://console.aws.amazon.com/s3/buckets/horizons-hackathon-snackchat/?region=us-east-1&tab=overview",
    successActionStatus: 201
  }
   console.log(process.env.AWS_ACCESS_KEY);
  RNS3.put(file2, options2).then((response) => {
    if (response.status !== 201) {
        throw new Error("Failed to upload image to S3");
    }
    console.log("this is AWS RESPONSE ###22222222:", response);
    const file = {
      uri: first,
      name: "image" + getRandomInt(0,10000) + ".png",
      type: "image/png"
    }
    const options = {
      keyPrefix: "uploads/",
      bucket: "horizons-hackathon-snackchat",
      region: "us-west-1",
      accessKey: "AKIAJ6TQHMYEL7WOGWZA",
      secretKey: "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",
      awsURL: "https://console.aws.amazon.com/s3/buckets/horizons-hackathon-snackchat/?region=us-east-1&tab=overview",
      successActionStatus: 201
    }
    RNS3.put(file, options).then((resp) => {
      if (resp.status !== 201) {
          throw new Error("Failed to upload image to S3");
      }
      console.log("this is AWS RESPONSE:", resp);
      axios.post(dbURL + '/uploadcard', {
        userId: id,
        imageA: response.body.postResponse.location,
        imageB: resp.body.postResponse.location,
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      })
    })
  })
}
