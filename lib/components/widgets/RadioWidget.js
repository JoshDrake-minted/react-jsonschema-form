"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RadioWidget(_ref) {
  var schema = _ref.schema,
      options = _ref.options,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      autofocus = _ref.autofocus,
      _onChange = _ref.onChange;

  // Generating a unique field name to identify this set of radio buttons
  var name = Math.random().toString();
  var enumOptions = options.enumOptions,
      inline = options.inline;

  return _react2.default.createElement(
    "div",
    { className: "field-radio-group" },
    enumOptions.map(function (option, i) {
      var checked = option.value === value;
      return _react2.default.createElement(
        "div",
        { key: i, className: "radio" + (inline ? "-inline" : "") + " " + (disabled ? "disabled" : "") },
        _react2.default.createElement(
          "label",
          null,
          _react2.default.createElement("input", { type: "radio",
            name: name,
            value: option.value,
            checked: checked,
            disabled: disabled,
            autoFocus: autofocus && i === 0,
            onChange: function onChange(_) {
              return _onChange(option.value);
            } }),
          option.label
        )
      );
    })
  );
}

RadioWidget.defaultProps = {
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  RadioWidget.propTypes = {
    schema: _react.PropTypes.object.isRequired,
    id: _react.PropTypes.string.isRequired,
    options: _react.PropTypes.shape({
      enumOptions: _react.PropTypes.array,
      inline: _react.PropTypes.bool
    }).isRequired,
    value: _react.PropTypes.any,
    required: _react.PropTypes.bool,
    autofocus: _react.PropTypes.bool,
    onChange: _react.PropTypes.func
  };
}
exports.default = RadioWidget;