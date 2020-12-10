module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        status: 200, /* Defaults to 200 */
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*', // Or the origins you want to allow requests from
            'Content-Type': 'application/json'
          },
        body: "Hello Node"
    };
};