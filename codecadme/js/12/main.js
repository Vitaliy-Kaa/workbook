//  Requests

// ****  Asynchronous calls with XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', 'mysite.com/api/getjson');

//  ***  The query string in a URL  ***
const requestUrl = 'http://mysite.com/api/vendor?name=kavin&id=35412';


// ***  JSON: JavaScript Object Notation  ***
const jsonObj = {
  "name": "Rick",
  "id": "11A",
  "level": 4  
};


// *** XMLHttpRequest GET Request Requirements ***
const req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', '/myendpoint/getdata?id=65');
req.onload = () => {
  console.log(xhr.response);
};

req.send();


// *** HTTP POST request with the XMLHttpRequest API ***
const data = {
  fish: 'Salmon',
  weight: '1.5 KG',
  units: 5
};
const xhr = new XMLHttpRequest();
xhr.open('POST', '/inventory/add');
xhr.responseType = 'json';
xhr.send(JSON.stringify(data));

xhr.onload = () => {
  console.log(xhr.response);
};


// *** promise url parameter fetch api  ***
fetch('url')
.then(
  response  => {
    console.log(response);
  },
 rejection => {
    console.error(rejection.message);
);


// ***  ok property fetch api  ***
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
}


// *** Fetch API Function  ***
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
 body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();  
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})


// *** JSON Formatted response body ***
fetch('url-that-returns-JSON')
.then(response => response.json())
.then(jsonResponse => {
  console.log(jsonResponse);
});


// **** async await syntax  ****
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try{
const response = __~await~__ __~fetch(endpoint, {cache: 'no-cache'});
    if(response.ok){
      const jsonResponse = await response.json()
    }
  }
  catch(error){
    console.log(error)
  }
}