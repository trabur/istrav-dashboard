
import * as headless from './headless.js'
import { istrav } from 'istrav'

window.istrav = istrav
window.scripts = headless.scripts
window.doHelloWorld = headless.doHelloWorld
window.doRun = headless.doRun