import { RNS3 } from 'react-native-aws3';

export const uploadPicturesThunk = (first, second, id) => (dispatch) => {
  getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

  const file = {
    uri: first,
    name: "image" + this.getRandomInt(0,10000) + ".png",
    type: "image/png"
  }

  const options = {
    keyPrefix: "uploads/",
    bucket: "horizons-hackathon-snackchat",
    region: "us-west-1",
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY,
    awsURL: "https://console.aws.amazon.com/s3/buckets/horizons-hackathon-snackchat/?region=us-east-1&tab=overview",
    successActionStatus: 201
  }

  RNS3.put(file, options).then(response => {
    if (response.status !== 201) {
        throw new Error("Failed to upload image to S3");
    }
    console.log("this is AWS RESPONSE:", response);
    // dispatch({success: true, })
    // this.setState({awsResp: response});
    // console.log("HELLA STATE",this.state);
  }
}
