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
    auth: `sarveshSP:${process.env.API_KEY}`,
  };
  callback(jData, options);
};

module.exports = jsonData;
