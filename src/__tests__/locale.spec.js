import { determineLocale, determineClientLocale } from '../locale';

const APP_LOCALES = ['en', 'fi'];

describe('[util] locale', function() {
  it('should be able to redirect user to their preferred locale', function() {
    const req = {
      originalUrl: '/',
      acceptsLanguages: () => 'en'
    };
    const res = {
      redirect: jest.fn()
    };

    const handleLocale = determineLocale(APP_LOCALES);
    expect(handleLocale(req, res)).toEqual(false);
    expect(res.redirect.mock.calls.length).toBe(1);
    expect(res.redirect.mock.calls[0][0]).toBe(307);
    expect(res.redirect.mock.calls[0][1]).toBe('/en/');
  });

  it('should be able to add trailing slash to locale', function() {
    const req = {
      originalUrl: '/en',
      acceptsLanguages: () => 'en'
    };
    const res = {
      redirect: jest.fn()
    };

    const handleLocale = determineLocale(APP_LOCALES);
    expect(handleLocale(req, res)).toEqual(false);
    expect(res.redirect.mock.calls.length).toBe(1);
    expect(res.redirect.mock.calls[0][0]).toBe(307);
    expect(res.redirect.mock.calls[0][1]).toBe('/en/');
  });

  it('should be able to determine locale from the path', function() {
    const req = {
      originalUrl: '/en/',
      acceptsLanguages: () => 'en'
    };
    const res = {
      redirect: jest.fn()
    };

    const handleLocale = determineLocale(APP_LOCALES);
    expect(handleLocale(req, res)).toEqual('en');
    expect(res.redirect.mock.calls.length).toBe(0);
  });
});
