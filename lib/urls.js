/* @flow */
const API_ROOT = "https://www.toggl.com/api/v8/";

const userUrl = () => `${API_ROOT}me`;

const sessionUrl = () => `${API_ROOT}sessions`;

const clientDetailsUrl = (clientId: ?number) =>
  clientId == null ? `${API_ROOT}clients` : `${API_ROOT}clients/${clientId}`;

const clientProjectsUrl = (clientId: number) =>
  `${API_ROOT}clients/${clientId}/projects`;

const groupUrl = (groupId: ?number) =>
  groupId == null ? `${API_ROOT}groups` : `${API_ROOT}groups/${groupId}`;

const projectUrl = (projectId: ?number) =>
  projectId == null
    ? `${API_ROOT}projects`
    : `${API_ROOT}projects/${projectId}`;

const multiProjectsUrl = (ids: Array<number>) =>
  `${API_ROOT}projects/${ids.join(",")}`;

const projectUsersUrl = (projectId: number) =>
  `${API_ROOT}projects/${projectId}/project_users`;

const projectTasksUrl = (projectId: number) =>
  `${API_ROOT}projects/${projectId}/tasks`;
