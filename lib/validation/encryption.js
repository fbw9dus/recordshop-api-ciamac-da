const bcrypt = require('bcrypt')
exports.encrypt = async textPasword => {
      return await bcrypt.hash(textPasword, 10)
}

exports.compare = async (textPassword, hash) => {
      return await bcrypt.compare(textPassword, hash)
}