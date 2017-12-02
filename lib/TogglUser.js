/* @flow */
import invariant from 'invariant';

declare type TogglBlogPost = {link?: string};

declare type TogglUser = {
  api_token: string,

  /**
   * default workspace id
   */
  default_wid: number,
  email: string,
  fullname: string,
  jquery_timeofday_format: string,
  jquery_date_format: string,
  timeofday_format: string,
  date_format: string,

  /**
   * whether start and stop time are saved on time entry
   */
  store_start_and_stop_time: boolean,

  /**
   * integer 0-6, Sunday=8
   */
  beginning_of_week: number,

  /**
   * user's language
   */
  language: string,

  /**
   * url with the user's profile picture
   */
  image_url: string,

  /**
   * should a piechart be shown on the sidebar
   */
  sidebar_piechart: boolean,

  /**
   * timestamp of last changes
   */
  at: string,

  /**
   * an object with toggl blog post title and link
   */
  new_blog_post: TogglBlogPost,

  /**
   * Toggl can send newsletters over e-mail to the user
   */
  send_product_emails: boolean,

  /**
   * if user receives weekly report
   */
  send_weekly_report: boolean,

  /**
   * email user about long-running (more than 8 hours) tasks
   */
  send_timer_notifications: boolean,

  /**
   * google signin enabled
   */
  openid_enabled: boolean,

  /**
   * timezone user has set on the "My profile" page (IANA TZ timezones)
   */
  timezone: string,
};

export function loadTogglUser(json: string): TogglUser {
  const parsed: TogglUser = JSON.parse(json);
  invariant(typeof parsed === 'object', 'Object must be an object');
  invariant(typeof parsed.api_token === 'string', 'api_token must be a string');
  invariant(
    typeof parsed.default_wid === 'number',
    'default_wid must be a number',
  );
  invariant(typeof parsed.email === 'string', 'email must be a string');
  invariant(typeof parsed.fullname === 'string', 'fullname must be a string');
  invariant(
    typeof parsed.jquery_timeofday_format === 'string',
    'jquery_timeofday_format must be a string',
  );
  invariant(
    typeof parsed.jquery_date_format === 'string',
    'jquery_date_format must be a string',
  );
  invariant(
    typeof parsed.timeofday_format === 'string',
    'timeofday_format must be a string',
  );
  invariant(
    typeof parsed.date_format === 'string',
    'date_format must be a string',
  );
  invariant(
    typeof parsed.store_start_and_stop_time === 'boolean',
    'store_start_and_stop_time must be a boolean',
  );
  invariant(
    typeof parsed.beginning_of_week === 'number',
    'beginning_of_week must be a number',
  );
  invariant(typeof parsed.language === 'string', 'language must be a string');
  invariant(typeof parsed.image_url === 'string', 'image_url must be a string');
  invariant(
    typeof parsed.sidebar_piechart === 'boolean',
    'sidebar_piechart must be a boolean',
  );
  invariant(typeof parsed.at === 'string', 'at must be a string');
  invariant(
    typeof parsed.new_blog_post === 'object',
    'new_blog_post must be an object',
  );
  invariant(
    typeof parsed.send_product_emails === 'boolean',
    'send_product_emails must be a boolean',
  );
  invariant(
    typeof parsed.send_weekly_report === 'boolean',
    'send_weekly_report must be a boolean',
  );
  invariant(
    typeof parsed.send_timer_notifications === 'boolean',
    'send_timer_notifications must be a boolean',
  );
  invariant(
    typeof parsed.openid_enabled === 'boolean',
    'openid_enabled must be a boolean',
  );
  invariant(typeof parsed.timezone === 'string', 'timezone must be a string');
  return parsed;
}
