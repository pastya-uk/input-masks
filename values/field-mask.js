/* @flow */
export default {
  maskDefinitions: {
    '9': /\d/,
    'A': /[a-zA-Z]/,
    '*': /[a-zA-Z0-9]/
  },
  type: 'text',
  clearOnBlur: true,
  clearOnBlurPlaceholder: false,
  escChar: '\\',
  eventsToHandle: ['input', 'keyup', 'click', 'focus'],
  addDefaultPlaceholder: true,
  allowInvalidValue: false
};