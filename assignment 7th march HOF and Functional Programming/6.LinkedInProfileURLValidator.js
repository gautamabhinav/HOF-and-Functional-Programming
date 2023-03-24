// function isLinkedInURL(url) {
//     const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
//     return pattern.test(url);
//   }

//   const url1 = 'https://www.linkedin.com/in/john_doe123';
//   const url2 = 'https://www.linkedin.com/in/mary-jane_smith';
//   const url3 = 'https://www.linkedin.com/in/12345';
//   const url4 = 'https://www.linkedin.com/in/john_doe#profile';
//   const url5 = 'http://www.linkedin.com/in/john_doe';
  
//   console.log(isLinkedInURL(url1)); // true
//   console.log(isLinkedInURL(url2)); // true
//   console.log(isLinkedInURL(url3)); // false
//   console.log(isLinkedInURL(url4)); // false
//   console.log(isLinkedInURL(url5)); // false



function validateLinkedInProfileUrl(url) {
  const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  if (regex.test(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
}


validateLinkedInProfileUrl("https://www.linkedin.com/in/johndoe123");
validateLinkedInProfileUrl("https://www.linkedin.com/in/invalid-url");
validateLinkedInProfileUrl('http://www.linkedin.com/in/john_doe');
validateLinkedInProfileUrl('https://www.linkedin.com/in/mary-jane_smith');
validateLinkedInProfileUrl('https://www.linkedin.com/in/john_doe#profile');

  