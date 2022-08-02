import rootDomain from '../src';

describe('api.basic', () => {
  test('rootDomain www.baidu.com should return baidu.com', function () {
    const str = 'https://www.baidu.com';
    const res = rootDomain(str);
    expect(res).toBe('baidu.com');
  });

  test('http://www.95559.com.cn should return 95559.com.cn', function () {
    const str = 'http://www.95559.com.cn/BankCommSite/default.shtml';
    const res = rootDomain(str);
    expect(res).toBe('95559.com.cn');
  });

  test('multiple level domain site', function () {
    const str = 'http://12345.i.taobao.com';
    const res = rootDomain(str);
    expect(res).toBe('taobao.com');
  });

  test('rootDomain url with port', function () {
    const str = 'https://pt.singsound.com:10081/users/sign_in';
    const res = rootDomain(str);
    expect(res).toBe('singsound.com');
  });

  test('localhost should get localhost as domain', function () {
    const str = 'http://localhost:8080/';
    const res = rootDomain(str);
    expect(res).toBe('localhost');
  });

  test('special domain should worked', function () {
    const str1 = 'http://www.js.work';
    const res1 = rootDomain(str1);
    expect(res1).toBe('js.work');
  });
});
