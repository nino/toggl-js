'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.loadTogglUser = loadTogglUser;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadTogglUser(json) {
  var parsed = JSON.parse(json);
  (0, _invariant2.default)((typeof parsed === 'undefined' ? 'undefined' : _typeof(parsed)) === 'object', 'Object must be an object');
  (0, _invariant2.default)(typeof parsed.api_token === 'string', 'api_token must be a string');
  (0, _invariant2.default)(typeof parsed.default_wid === 'number', 'default_wid must be a number');
  (0, _invariant2.default)(typeof parsed.email === 'string', 'email must be a string');
  (0, _invariant2.default)(typeof parsed.fullname === 'string', 'fullname must be a string');
  (0, _invariant2.default)(typeof parsed.jquery_timeofday_format === 'string', 'jquery_timeofday_format must be a string');
  (0, _invariant2.default)(typeof parsed.jquery_date_format === 'string', 'jquery_date_format must be a string');
  (0, _invariant2.default)(typeof parsed.timeofday_format === 'string', 'timeofday_format must be a string');
  (0, _invariant2.default)(typeof parsed.date_format === 'string', 'date_format must be a string');
  (0, _invariant2.default)(typeof parsed.store_start_and_stop_time === 'boolean', 'store_start_and_stop_time must be a boolean');
  (0, _invariant2.default)(typeof parsed.beginning_of_week === 'number', 'beginning_of_week must be a number');
  (0, _invariant2.default)(typeof parsed.language === 'string', 'language must be a string');
  (0, _invariant2.default)(typeof parsed.image_url === 'string', 'image_url must be a string');
  (0, _invariant2.default)(typeof parsed.sidebar_piechart === 'boolean', 'sidebar_piechart must be a boolean');
  (0, _invariant2.default)(typeof parsed.at === 'string', 'at must be a string');
  (0, _invariant2.default)(_typeof(parsed.new_blog_post) === 'object', 'new_blog_post must be an object');
  (0, _invariant2.default)(typeof parsed.send_product_emails === 'boolean', 'send_product_emails must be a boolean');
  (0, _invariant2.default)(typeof parsed.send_weekly_report === 'boolean', 'send_weekly_report must be a boolean');
  (0, _invariant2.default)(typeof parsed.send_timer_notifications === 'boolean', 'send_timer_notifications must be a boolean');
  (0, _invariant2.default)(typeof parsed.openid_enabled === 'boolean', 'openid_enabled must be a boolean');
  (0, _invariant2.default)(typeof parsed.timezone === 'string', 'timezone must be a string');
  return parsed;
}