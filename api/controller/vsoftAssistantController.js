'use strict';

exports.get_branch = function(req, res){

    var responseJson = {};

      // If speech or displayText is defined, use it to respond (if one isn't defined use the other's value)
      responseJson.speech = "Madhapur" || "Madhapur";
      responseJson.displayText = "Madhapur" || "Madhapur";

      // Optional: add rich messages for integrations (https://dialogflow.com/docs/rich-messages)
      responseJson.data = "Madhapur";

      // Optional: add contexts (https://dialogflow.com/docs/contexts)
      // responseJson.contextOut = "";

      // response.json(responseJson);

      res.send(responseJson);
};

// exports.get_branchname = function(req, res){
//     return "Kukatpally";
// };
