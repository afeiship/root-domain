const nx = require('@feizheng/next-js-core2');
require('../src/next-parse-request-args');

const expected = {
  url: '/github/api/v1/afeiship',
  method: 'get',
  data: { query: 1 },
  options: {
    Authorization: 'eyJhbGciOiJIUzUxMiJ9', headers: { 'Content-Type': 'application/json' }
  }
};

describe('api.basic test', () => {
  test('nx.parseRequestArgs 1 args', function () {
    var args = [{
      url: '/github/api/v1/afeiship',
      method: 'get',
      data: { query: 1 },
      options: {
        Authorization: 'eyJhbGciOiJIUzUxMiJ9', headers: { 'Content-Type': 'application/json' }
      }
    }];

    expect(nx.parseRequestArgs(args)).toEqual(expected);
  });


  test('nx.parseRequestArgs 2 args', () => {
    var args = [
      '/github/api/v1/afeiship',
      {
        method: 'get',
        data: { query: 1 },
        options: {
          Authorization: 'eyJhbGciOiJIUzUxMiJ9', headers: { 'Content-Type': 'application/json' }
        }
      }
    ];

    expect(nx.parseRequestArgs(args)).toEqual(expected);
  });

  test('nx.parseRequestArgs 3 args', () => {
    var args = [
      '/github/api/v1/afeiship',
      'get',
      {
        data: { query: 1 },
        options: {
          Authorization: 'eyJhbGciOiJIUzUxMiJ9', headers: { 'Content-Type': 'application/json' }
        }
      }
    ];

    expect(nx.parseRequestArgs(args)).toEqual(expected);
  })

  test('nx.parseRequestArgs 4 args', () => {
    var args = [
      '/github/api/v1/afeiship',
      'get',
      { query: 1 },
      {
        Authorization: 'eyJhbGciOiJIUzUxMiJ9', headers: { 'Content-Type': 'application/json' }
      }
    ];
    expect(nx.parseRequestArgs(args)).toEqual(expected);
  });

  test('nx.parseRequestArgs 1 args & return array', () => {
    var args = [
      {
        url: '/github/api/v1/afeiship',
        method: 'get',
        data: { query: 1 },
        options: {
          Authorization: 'eyJhbGciOiJIUzUxMiJ9', headers: { 'Content-Type': 'application/json' }
        }
      }
    ];

    expect(
      nx.parseRequestArgs(args, true)
    ).toEqual([
      '/github/api/v1/afeiship',
      'get',
      { query: 1 },
      {
        Authorization: 'eyJhbGciOiJIUzUxMiJ9', headers: { 'Content-Type': 'application/json' }
      }
    ]);
  });


  test('nx.parseRequestArgs 0 args should throw error', () => {
    var args = [];
    expect(() => {
      nx.parseRequestArgs(args)
    }).toThrow();
  });

  test('nx.parseRequestArgs 5 args should throw error', () => {
    var args = [1, 2, 3, 4, 5];
    expect(() => {
      nx.parseRequestArgs(args)
    }).toThrow();
  });

});
