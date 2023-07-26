
// This is a Twilio Function that returns the remaining cash balance of this Twilio Project
// Reference: https://support.twilio.com/hc/en-us/articles/360025294494-Check-Your-Twilio-Account-Balance

const axios = require("axios");

exports.handler = function(context, event, callback) {

const auth = {
  username: context.ACCOUNT_SID,
  password: context.AUTH_TOKEN
}

const session_url = `https://api.twilio.com/2010-04-01/Accounts/${auth.username}/Balance.json`

  axios.get(session_url, { auth: auth }).then(result => {
    return callback(null, {remainingBalance: result.data.balance} );
  }).catch(err => {
    return callback({error: `An Error Has Occured: ${err}`})
  })

};
