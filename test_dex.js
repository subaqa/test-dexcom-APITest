const assert = require("chai").assert;
const expect = require("chai").expect;
const asser = require("chai");
const Wreck = require('@hapi/wreck');

var url = "https://clarity.dexcom.com/api/subject/1594950620847472640/analysis_session";


describe("verify anayisis_session endpoint", function() {


    it("post method to the analysis endpoint should be successful", async function() {

        const options = {
            "headers": {
                "Access-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N3ZWV0c3BvdGRpYWJldGVzLmNvbSIsInN1YiI6IlN3ZWV0c3BvdCIsImlhdCI6MTU5Mzk5MDk3OSwiY29uc2VudFBlcm1pc3Npb24iOiJsaW5rZWRTdWJqZWN0cyIsImRleGNvbUlkIjoiNWQ0ZWZkZTEtNzg4NC00Y2YzLWJlYjctMzllNTM4OGFjNDBkIiwiZXhwIjoxNTk0MDc3Mzc5LCJyb2xlIjoiT3duZXIiLCJzdWJqZWN0SWQiOiIxNTk0OTUwNjIwODQ3NDcyNjQwIn0.P69wplzMF1fbWV4-wChz1cxgbYdqnZzGB2FmHRMWLn22QhoEeUpOUntW8VeXt0AUYbvBVGqseEMleq6jO7-TwoDWY4QxwqTor_FkVXskSZQnC7k90d3aA1SGUNR6k9lIKemM538J_y78gktJ_DdF0jZo5ydk9tPlqNGTjlcHL4iw8hpSZODVRjK4Dp2CZOnj8sNID2C3p2FH6Fj6oTlpR50BjyhMablqUKsj9Oe3JEB4HC_MyN8ypAcr8fSOcSuCkLdk6cXGwUhUNWC0IiKWsny9tMKesgNhwA_GsVw2ex2koepeHgekLcfJfPX3EQA4RkOJREiX8nFWi2Mqe3-V7w"
               }, 
                json:true
        };

        let postBody = {
                "analysisSessionId": "1671214427743154176",
                "dateTime": "2020-07-03T16:37:56.946Z",
                "subjectId": "1594950620847472640"

        };

        const {res, payload} = await Wreck.post(url,options)
        console.log(payload);
                  assert.isNotNull(payload.analysisSessionId)

    });
})