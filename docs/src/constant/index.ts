export const gitlabHost = process.env.NEXT_PUBLIC_GITLAB_HOST;

export const clientId: string = process.env.CLIENT_ID ?? '';
export const tokenUrl = `${gitlabHost}/oauth/token`;
export const clientSecret: string = process.env.CLIENT_SECRET ?? '';
export const authorizationUrl = `${gitlabHost}/oauth/authorize`;
export const userUrl = `${gitlabHost}/api/v4/user`;

export const createIssueUrl = `${gitlabHost}/api/v4/projects/${process.env.NEXT_PUBLIC_PROJECT_ID}/issues`;

export const redirectUrl: string = process.env.REDIRECT_URL ?? '';

export const milesNum = 1000;
