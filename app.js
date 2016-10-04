const PORT = 8000;

const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {

  let { url, method } = req;
  //let [ path, queryStr ] = url.split('?');
  //let query = qs.parse(queryStr);
  //console.log(`path: ${path} query: ${JSON.stringify(query)}`);


  switch (method) {
    case 'GET':
      let pathArr = url.split('/');
      let pathRoot = pathArr[1];

      switch (pathRoot) {
        case "math":

          let operator = pathArr[2];
          let num1 = parseFloat(pathArr[3]);
          let num2 = parseFloat(pathArr[4]);
          let answer;

          if(operator === 'add') {
            answer = num1 + num2;
          } else if(operator === 'subtract') {
            answer = num1 - num2;
          } else if(operator === 'multiply') {
            answer = num1 * num2;
          } else if(operator === 'devide') {
            answer = num1 / num2;
          } else if(operator === 'exponent') {
            answer = Math.pow(num1, num2);
          } else if(operator === 'squareroot') {
            answer = Math.sqrt(num1)
          } else {
            answer = 'error';
          }

          res.end(`${answer}\n`)

          break;

        

        default:
          res.statusCode = 404;
          res.end(`Err`);
      }


      break;

    default:
      res.statusCode = 404;
      res.end(`Not found`);

  }

  // switch (path) {
  //   case '/math':
  //
  //       res.end( JSON.stringify(path) );
  //
  //     // res.end('math \n');
  //     break;
  //   default:
  //     let pathStr = JSON.stringify(path);
  //     res.statusCode = 404;
  //     res.end(`Not found`)
  //
  // }

});

server.listen(PORT, err => {
  console.log(err || `Server is listening on port ${PORT}`)
})