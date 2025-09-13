const response=fetch("https://jsonplaceholder.typicode.com/users");
console.log(response); //Promise { <pending> }
console.log(typeof response);//object
//response.then((data)=>{console.log(data)})
//response.then((data)=>{console.log(data.json())});
response.then((data)=>{
    console.log(data.json()
    .then((r)=>console.log("-----------",r) )
              )
            });
            //to read only first user data 
// response.then((data)=>{
//     data.json().then((result)=>{console.log(result[0])})
//   });    
            //response.then((data)=>{data.json().then((result)=>{console.log(result)})})
/*
Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    date: 'Wed, 10 Sep 2025 16:20:29 GMT',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '1847',
    connection: 'keep-alive',
    'access-control-allow-credentials': 'true',
    'cache-control': 'max-age=43200',
    'content-encoding': 'gzip',
    etag: 'W/"160d-1eMSsxeJRfnVLRBmYJSbCiJZ1qQ"',
    expires: '-1',
    nel: '{"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}',
    pragma: 'no-cache',
    'report-to': '{"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=WRRPwTSXt5fyI5cwwFLKjF%2BJWqdRv1y5H7kQ6HAr%2BQ8%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1753181821"}],"max_age":3600}',
    'reporting-endpoints': 'heroku-nel="https://nel.heroku.com/reports?s=WRRPwTSXt5fyI5cwwFLKjF%2BJWqdRv1y5H7kQ6HAr%2BQ8%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1753181821"',
    server: 'cloudflare',
    vary: 'Origin, Accept-Encoding',
    via: '2.0 heroku-router',
    'x-content-type-options': 'nosniff',
    'x-powered-by': 'Express',
    'x-ratelimit-limit': '1000',
    'x-ratelimit-remaining': '999',
    'x-ratelimit-reset': '1753181855',
    age: '6250',
    'cf-cache-status': 'HIT',
    'cf-ray': '97d040c54e1890ba-LHR',
    'alt-svc': 'h3=":443"; ma=86400'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'https://jsonplaceholder.typicode.com/users'
}
Promise { <pending> }
</pending>
*/
//fetch api is used to make http requests to servers
//it returns a promise which resolves to a response object
//to extract the data from the response object we use json() method which also returns a promise
//so we use another then() method to extract the data from the json() method
//response.then((data)=>{data.json().then((result)=>{console.log(result)})})
//[ { id: 1, name: 'Leanne Graham', username: 'Bret', email: '      