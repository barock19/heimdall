import jsdom from "jsdom";
import sinon from "sinon";
import chai from "chai";
import chaiImmutable from "chai-immutable";
import chaiSinon from "sinon-chai";

// Setup JSDOM
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

// setup chai
chai.use(chaiImmutable)
chai.use(chaiSinon)

global.sinon = sinon
global.expect = chai.expect
global.context = chai.expect