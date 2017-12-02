"use strict";

var API_ROOT = "https://www.toggl.com/api/v8/";

var userUrl = function userUrl() {
  return API_ROOT + "me";
};

var sessionUrl = function sessionUrl() {
  return API_ROOT + "sessions";
};

var clientDetailsUrl = function clientDetailsUrl(clientId) {
  return clientId == null ? API_ROOT + "clients" : API_ROOT + "clients/" + clientId;
};

var clientProjectsUrl = function clientProjectsUrl(clientId) {
  return API_ROOT + "clients/" + clientId + "/projects";
};

var groupUrl = function groupUrl(groupId) {
  return groupId == null ? API_ROOT + "groups" : API_ROOT + "groups/" + groupId;
};

var projectUrl = function projectUrl(projectId) {
  return projectId == null ? API_ROOT + "projects" : API_ROOT + "projects/" + projectId;
};

var multiProjectsUrl = function multiProjectsUrl(ids) {
  return API_ROOT + "projects/" + ids.join(",");
};

var projectUsersUrl = function projectUsersUrl(projectId) {
  return API_ROOT + "projects/" + projectId + "/project_users";
};

var projectTasksUrl = function projectTasksUrl(projectId) {
  return API_ROOT + "projects/" + projectId + "/tasks";
};