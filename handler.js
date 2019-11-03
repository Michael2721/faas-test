'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello!',
      }),
  };

  callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.imgresize = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Thank you for using IMG Resize service unfortunatly it is currently unavailable.',
        
      }),
  };

  callback(null, response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.id = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      //id: event.pathParameters.id,
      message: 'Your choosen ID = '+event.pathParameters.id,
    }),
  };
};
