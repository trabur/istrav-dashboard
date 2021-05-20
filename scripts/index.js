
import * as headless from './headless.cjs'
import { istrav } from 'istrav'

window.istrav = istrav
window.scripts = headless.scripts
window.doHelloWorld = headless.doHelloWorld
window.doRun = headless.doRun