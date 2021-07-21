require("dotenv").config();
const jsonData = ({ fName, msg, email }, callback) => {
  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          MSG: msg,
        },
      },
    ],
  };

  const jData = JSON.stringify(data);
  const options = {
    method: "POST",
    auth: `sarveshSP:${process.env.API_KEY}`,
  };
  callback(jData, options);
};

module.exports = jsonData;
