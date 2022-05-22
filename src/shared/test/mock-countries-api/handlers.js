import { rest } from 'msw';
import { testCountries } from './test-countries';
import { API_URL } from 'shared/config';
import * as path from 'path';
import * as fs from 'fs';

const testDelay = null; //random realistic server response time

export const allHandler = rest.get(`${API_URL}/all`, (req, res, ctx) => {
  return res(ctx.delay(testDelay), ctx.status(200), ctx.json(testCountries));
});

export const nameHandler = rest.get(`${API_URL}/name/:name`, (req, res, ctx) => {
  const { name } = req.params;
  if (!name) {
    return res(ctx.delay(testDelay), ctx.status(400));
  }
  const matchCountries = testCountries.filter((item) =>
    item?.name?.toLowerCase()?.includes(name?.toLowerCase())
  );
  if (!matchCountries?.length) {
    return res(ctx.delay(testDelay), ctx.status(404));
  }
  return res(ctx.delay(testDelay), ctx.status(200), ctx.json(matchCountries));
});

export const alphaCodeHandler = rest.get(`${API_URL}/alpha/:code`, (req, res, ctx) => {
  const { code } = req.params;
  if (!code) {
    return res(ctx.delay(testDelay), ctx.status(400));
  }
  const matchCountry = testCountries.find((item) =>
    [item?.alpha2Code, item?.alpha3Code].includes(code?.toUpperCase())
  );
  if (!matchCountry) {
    return res(ctx.delay(testDelay), ctx.status(404));
  }
  return res(ctx.delay(testDelay), ctx.status(200), ctx.json(matchCountry));
});

export const alphaListHandler = rest.get(`${API_URL}/alpha`, (req, res, ctx) => {
  const codes = req.url.searchParams.get('codes').split(',');
  if (!codes?.length) {
    return res(ctx.delay(testDelay), ctx.status(400));
  }
  const matchCountries = testCountries.filter((item) =>
    codes?.some((code) => [item?.alpha2Code, item?.alpha3Code].includes(code?.toUpperCase()))
  );
  if (!matchCountries?.length) {
    return res(ctx.delay(testDelay), ctx.status(404));
  }
  return res(ctx.delay(testDelay), ctx.status(200), ctx.json(matchCountries));
});

export const imageHandler = rest.get('https://flagcdn.com/*:image', (req, res, ctx) => {
  const { image } = req.params;

  let imageBuffer;
  try {
    imageBuffer = fs.readFileSync(path.resolve(__dirname, `test-countries/${image}`));
  } catch (err) {
    return res(ctx.delay(testDelay), ctx.status(404));
  }

  const contentTypes = [
    { fileExt: '.svg', type: 'image/svg+xml' },
    { fileExt: '.png', type: 'image/png' },
  ];
  const imageType = contentTypes.find((item) => item.fileExt === path.extname(image))?.type;
  if (!imageType) {
    return res(ctx.delay(testDelay), ctx.status(404));
  }

  return res(
    ctx.delay(testDelay),
    ctx.set('Content-Length', imageBuffer.byteLength.toString()),
    ctx.set('Content-Type', imageType),
    ctx.body(imageBuffer)
  );
});

export const allErrorHandler = rest.get(`${API_URL}/all*`, (req, res, ctx) => {
  return res(ctx.delay(testDelay), ctx.status(500));
});

export const nameErrorHandler = rest.get(`${API_URL}/name*`, (req, res, ctx) => {
  return res(ctx.delay(testDelay), ctx.status(500));
});

export const alphaErrorHandler = rest.get(`${API_URL}/alpha*`, (req, res, ctx) => {
  return res(ctx.delay(testDelay), ctx.status(500));
});

export const defaultHandlers = [
  allHandler,
  nameHandler,
  alphaCodeHandler,
  alphaListHandler,
  imageHandler,
];
