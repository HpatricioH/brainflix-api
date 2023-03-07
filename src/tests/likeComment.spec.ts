import { test, expect } from '@playwright/test'

// comment tests to be run in order to test the API (add, like, and delete) run test one by one
test('like a comment ', async ({ request, baseURL }) => {
  const response = await request.put(`${baseURL}/76ca28c0-7dea-4553-887f-8e5129a80fc3/comments/8a51aaf1-6812-4454-ab22-2baaf6ee99ca/likes`)
  expect(response.ok()).toBeTruthy()
  expect(response.status()).toBe(200)
  console.log(await response.json())
})
