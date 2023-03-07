import { test, expect } from '@playwright/test'

test('like a Video', async ({ request, baseURL }) => {
  const response = await request.put(`${baseURL}/76ca28c0-7dea-4553-887f-8e5129a80fc3/likes`)
  expect(response.ok()).toBeTruthy()
  expect(response.status()).toBe(200)
  // console.log(await response.json())
})
