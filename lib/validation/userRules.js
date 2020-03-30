const {check} = require('express-validator')

exports.userValidationRules = [
    //check email
    check('email').isEmail()
    .normalizeEmail()
    .withMessage(" Bitte prüf deine Email-Adresse"),

    
    //check first name
    check('firstName').isLength({min:2})
    .exists()
    .trim()
    .withMessage('Vorname ist ein Pflichtfeld'),

    // Password
    check('password').isLength({min:10}).withMessage('Das Passwort muss mindestestens 10 stellen haben')
]

