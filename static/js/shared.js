'use strict';

const _ = require('underscore');
const tags = ['h1','h2', 'h3', 'h4', 'h5', 'h6'];

exports.collectContentPre = (hookName, context, cb) => {
  const tname = context.tname;
  const state = context.state;
  const lineAttributes = state.lineAttributes;
  const tagIndex = tags.indexOf(tname);
  if (tname === 'div' || tname === 'p') {
    delete lineAttributes.heading;
    delete lineAttributes.headerId;
  }
  if (tagIndex >= 0) {
    lineAttributes.heading = tags[tagIndex];
    lineAttributes.headerId = context.cls.split(' ')[1];
  }
  return cb();
};

// I don't even know when this is run..
exports.collectContentPost = (hookName, context, cb) => {
  const tname = context.tname;
  const state = context.state;
  const lineAttributes = state.lineAttributes;
  const tagIndex = tags.indexOf(tname);
  if (tagIndex >= 0) {
    delete lineAttributes.heading;
    delete lineAttributes.headerId;
  }
  return cb();
};
