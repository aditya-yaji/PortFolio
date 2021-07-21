require("dotenv").config();
const jsonData = ({ fName, lName, email }, callback) => {
  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName,
        },
      },
    ],
  };

  const jData = JSON.stringify(data);
  const options = {
    method: "POST",
    auth: `sarveshSP:d55614f15d1359a8f3141cd2f6696f01-us6`,
  };
  callback(jData, options);
};

module.exports = jsonData;
