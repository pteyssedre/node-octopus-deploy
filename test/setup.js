const chai = require('chai')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)

global.expect = chai.expect
global.logToConsoleDisabled = true
