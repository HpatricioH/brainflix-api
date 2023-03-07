import { test, expect } from '@playwright/test'

test('add a comment to a video', async ({ request, baseURL }) => {
  const response = await request.post(`${baseURL}/76ca28c0-7dea-4553-887f-8e5129a80fc3/comments`, {
    data: {
      name: 'Patricio Huerta',
      comment: 'Such a good player, he needs to play al the time with the team!',
      timestamp: '1632496261000'
    }
  })

  expect(response.ok()).toBeTruthy()
  expect(response.status()).toBe(201)
  console.log(await response.json())
})
