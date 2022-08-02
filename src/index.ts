import psl from 'psl';

const HTTPS_REGEX = /^https?:\/\//i;
const LOCAL = 'localhost';

export default (inTarget: string) => {
  // test target is a url
  const isUrl = HTTPS_REGEX.test(inTarget);
  const url = isUrl ? inTarget : `http://${inTarget}`;
  const uri = new URL(url);
  const hostname = uri.hostname;
  if (hostname === LOCAL) return hostname;
  return psl.get(hostname);
};
