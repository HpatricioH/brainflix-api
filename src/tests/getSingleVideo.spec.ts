import { test, expect } from '@playwright/test'

test('get single Video', async ({ request, baseURL }) => {
  const _response = await request.get(`${baseURL}/76ca28c0-7dea-4553-887f-8e5129a80fc3`)
  expect(_response.ok()).toBeTruthy()
  expect(_response.status()).toBe(200)
  // console.log(await _response.json())
})
