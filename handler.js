const toSlack = require('./to_slack');

module.exports.fromGithub = async (event, context, callback) => {
  await toSlack();
  const response = {
    statusCode: 200,
    body: 'ok!',
  };

  callback(null, response);
};
