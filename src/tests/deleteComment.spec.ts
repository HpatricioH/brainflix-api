import { test, expect } from '@playwright/test'

// comment tests to be run in order to test the API (add, like, and delete) run test one by one
test('delete a comment', async ({ request, baseURL }) => {
  const response = await request.delete(`${baseURL}/76ca28c0-7dea-4553-887f-8e5129a80fc3/comments/2e345032-86e3-4a71-9adc-5ae0e0b7842d/`)
  expect(response.ok()).toBeTruthy()
  expect(response.status()).toBe(200)
  console.log(await response.json())
})
