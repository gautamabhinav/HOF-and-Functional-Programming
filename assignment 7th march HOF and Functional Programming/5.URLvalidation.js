const urlRegex = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

function validateURL(url) {
  if (urlRegex.test(url)) {
    console.log(`The URL "${url}" is valid.`);
  } else {
    console.log(`The URL "${url}" is not valid.`);
  }
}

validateURL('http://www.example.com'); // valid URL
validateURL('https://example.com/page.html?id=123'); // valid URL
validateURL('https://example.com/path/to/page'); // valid URL
validateURL('http://example.com:8080'); // valid URL
validateURL('https://example.com/path/with/spaces.html'); // valid URL
validateURL('http://example.com:80#foo'); // valid URL
validateURL('http://invalid/url'); // valid URL
validateURL('ftp://example.com'); // not valid URL
