const loginData = 
[
    {
          "testCase": "ID: 3 - Verify login failure for valid username and invalid password",
          "username": "tomsmith",
          "password": "invalidpass",
          "expectedErrorText": "Your password is invalid"
    },
    {
          "testCase": "ID: 4 - Verify login failure for invalid username and valid password",
          "username": "invaliduser",
          "password": "SuperSecretPassword!",
          "expectedErrorText": "Your username is invalid"
    },
    {
          "testCase": "ID: 5 - Verify login failure for invalid username and invalid password",
          "username": "invaliduser",
          "password": "SuperSecretPassword!",
          "expectedErrorText": "Your username is invalid"
    }
];

module.exports = {
    loginData
}