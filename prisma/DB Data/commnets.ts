const comments = [
  {
    id: '35bba08b-1b51-4153-ba7e-6da76b5ec1b9',
    video_id: '84e96018-4022-434e-80bf-000ce4cd12b8',
    name: 'Micheal Lyons',
    comment: 'They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.',
    likes: 0,
    timestamp: 1628522461000
  },
  {
    id: '091de676-61af-4ee6-90de-3a7a53af7521',
    video_id: '84e96018-4022-434e-80bf-000ce4cd12b8',
    name: 'Gary Wong',
    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
    likes: 0,
    timestamp: 1626359541000
  },
  {
    id: '66b7d3c7-4023-47f1-a02c-520c9ca187a6',
    video_id: '84e96018-4022-434e-80bf-000ce4cd12b8',
    name: 'Theodore Duncan',
    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!',
    likes: 0,
    timestamp: 1626011132000
  },
  {
    id: 'ade82e25-6c87-4403-ba35-47bdff93a51c',
    video_id: 'c05b9a93-8682-4ab6-aff2-92ebb4bbfc14',
    name: 'Mattie Casarez',
    comment: 'This is exactly the kind of advice I’ve been looking for! One minute you’re packing your bags, the next you’re dancing around in the streets without a care in the world.',
    likes: 0,
    timestamp: 1625250720000
  },
  {
    id: 'bf704c76-cba9-462e-ac0a-166315df756c',
    video_id: 'c05b9a93-8682-4ab6-aff2-92ebb4bbfc14',
    name: 'Taylor Jade',
    comment: 'Excellent tips! Another idea is to keep all of your important belongings like your passport inside a waterproof bag. Perfect for those last minute trips to the beach, trust me.',
    likes: 0,
    timestamp: 1625238122000
  },
  {
    id: 'ec2bec8d-ea2b-458e-9d93-b7f929a8659b',
    video_id: 'c05b9a93-8682-4ab6-aff2-92ebb4bbfc14',
    name: 'Adnan Natt',
    comment: 'Who ever knew travel could be so easy? Looking forward to getting to put this into practice when I fly away in the near future. Wish me good luck!',
    likes: 0,
    timestamp: 1625177192000
  },
  {
    id: '7ba106bf-e74a-4c21-b59e-c485a30eea45',
    video_id: '25ce5d91-a262-4dcf-bb87-42b87546bcfa',
    name: 'Giovana Alpine',
    comment: 'Wow! You can bet that we’ll be checking this place out when we’re in the area. The views look absolutely breathtaking. Thank you so much for sharing this with the world!',
    likes: 0,
    timestamp: 1623104591000
  },
  {
    id: '921f0e8d-f9d1-44db-b4a2-a2718339891e',
    video_id: '25ce5d91-a262-4dcf-bb87-42b87546bcfa',
    name: 'Victoire Lesage',
    comment: 'Skiing is a lifestyle! This may be hard to believe now, but I once competed here for the World Cup. The Alps are at their most beautiful when you’re shredding down them FAST.',
    likes: 0,
    timestamp: 1623071160000
  },
  {
    id: 'f7b9027b-e407-45fa-98f3-7d8a308ddf7c',
    video_id: '25ce5d91-a262-4dcf-bb87-42b87546bcfa',
    name: 'Sharon Tillson',
    comment: 'Amazing footage of an amazing spot! It’s so inspiring to watch the sun rising over a landscape like this. I can only imagine how fresh the air must feel there on a snowy morning.',
    likes: 3,
    timestamp: 1623002522000
  },
  {
    id: 'a2b4ccd4-af48-46e9-9e62-b96731dad728',
    video_id: 'b6f35f03-7936-409b-bd2a-446bcc5f30e7',
    name: 'Aurora Anita',
    comment: 'This video is SO important for anybody wishing to travel overseas. We’ll be using these tips on our trips!',
    likes: 2,
    timestamp: 1620983771000
  },
  {
    id: '6ed06295-635f-4fe7-b2b2-83b422c65a1f',
    video_id: 'b6f35f03-7936-409b-bd2a-446bcc5f30e7',
    name: 'Fatima Hassan',
    comment: 'The last thing you want is to be stranded somewhere without this type of knowledge! Thank you so much for sharing your experience, this will surely come in handy.',
    likes: 0,
    timestamp: 1620937932000
  },
  {
    id: '43edd26e-1a76-45da-98f8-684e660a8d5b',
    video_id: 'b6f35f03-7936-409b-bd2a-446bcc5f30e7',
    name: 'Joan Hidaka',
    comment: 'Great information all around! I’m saving this video to watch again the next time I head out of the country. Stay safe out there, folks.',
    likes: 1,
    timestamp: 1620930181000
  },
  {
    id: '823f6f49-db71-49fe-9918-bde8d8da6a4a',
    video_id: '1b964601-a6dd-4fcc-b5f3-1000338c9557',
    name: 'Felicia Hill',
    comment: 'Fantastic tips! I can’t believe I’ve been paying full price this whole time when it’s so easy to get a great deal. Never been more excited to book my next ticket!',
    likes: 0,
    timestamp: 1630790612000
  },
  {
    id: '797ca18c-4fd4-4887-b9f4-3ec098e8121d',
    video_id: '1b964601-a6dd-4fcc-b5f3-1000338c9557',
    name: 'Louis Applebee',
    comment: 'It’s like a weight has been lifted off of my shoulders. Thank you so much for sharing these tips. I will be sending this to all of my friends and family ASAP.',
    likes: 1,
    timestamp: 1630762321000
  },
  {
    id: 'fcc1cbf2-e332-4b49-9643-c08ddd8f85af',
    video_id: '1b964601-a6dd-4fcc-b5f3-1000338c9557',
    name: 'Anne Weston',
    comment: 'So glad I came across this. The way you have presented these techniques is perfectly clear. Even doing a couple of these things is sure to make me a happy camper!',
    likes: 0,
    timestamp: 1630678260000
  },
  {
    id: '52a21461-b0cc-43bc-a9d6-d52a7d4cedbe',
    video_id: '9c268c0a-83dc-4b96-856a-bb5ded2772b1',
    name: 'Marcus Forest',
    comment: 'We recently stayed at the Inn for our honeymoon. I definitely recommend the experience. We can’t wait to return for our anniversary!',
    likes: 1,
    timestamp: 1631273521000
  },
  {
    id: 'bc913baf-ff2e-41f0-99cb-b7ef4dc70ab4',
    video_id: '9c268c0a-83dc-4b96-856a-bb5ded2772b1',
    name: 'Ashley Jones',
    comment: 'The shimmer of the water through the windows here is just spectacular. Forget romance! If you want to reconnect with the world around you, this is the place to be.',
    likes: 2,
    timestamp: 1631088092000
  },
  {
    id: '85e3621c-493a-41e0-b0f8-2734d102c7d9',
    video_id: '9c268c0a-83dc-4b96-856a-bb5ded2772b1',
    name: 'Dylan Walter',
    comment: 'Boutique is right! All of these places look magnificent. From the hotel steps to the boardwalk, now that’s a commute I could get used to.',
    likes: 0,
    timestamp: 1631023292000
  },
  {
    id: 'c93c16f0-4795-45d1-b0da-21696d54f25a',
    video_id: 'fc5261d1-58a0-47e4-9c19-2b7a1715fa1b',
    name: 'Fionna Miller',
    comment: 'Location location location! It blows my mind how many people don’t understand this, but you’ve summed it up so well here. The next time I travel, I’ll be on the beachfront.',
    likes: 6,
    timestamp: 1631816492000
  },
  {
    id: '99938bd4-67f9-4404-ad3e-b23a6ad05717',
    video_id: 'fc5261d1-58a0-47e4-9c19-2b7a1715fa1b',
    name: 'Suzie Maxwell',
    comment: 'I wish I could print out a video to show to my travel agent. Oh, what am I saying – they have a computer! Much appreciated advice, I can’t wait to put it into action soon.',
    likes: 1,
    timestamp: 1631799181000
  },
  {
    id: 'fc2e9a8c-7daa-4e14-980d-5467ca2054ec',
    video_id: 'fc5261d1-58a0-47e4-9c19-2b7a1715fa1b',
    name: 'Alasie Rivers',
    comment: 'From five-star hotels to the cheapest spots – wherever you like to stay, THIS is the way to do it! I’ll take sunlight and a cozy reading corner over a pool any day of the week.',
    likes: 0,
    timestamp: 1631716921000
  },
  {
    id: '6ff4314c-acde-4c91-a753-95cb7a366ee9',
    video_id: '99478bed-6428-49ed-8eaa-f245a5414336',
    name: 'Jesse Cruz',
    comment: 'There’s no place quite like the open ocean. Wind in your sails. The cool mist is perfect to wake you up in the morning and lull you to sleep in the evening. What an experience.',
    likes: 0,
    timestamp: 1632227521000
  },
  {
    id: '894b2ef9-640e-4d55-95ac-c65cfc39d693',
    video_id: '99478bed-6428-49ed-8eaa-f245a5414336',
    name: 'Tristan Carter',
    comment: 'Drifting along the coast in a city on the water. Such incredible destinations to see all around the world.',
    likes: 1,
    timestamp: 1631976360000
  },
  {
    id: '2d818087-c1f4-4ec2-bcdc-b545fd6ec258',
    video_id: '76ca28c0-7dea-4553-887f-8e5129a80fc3',
    name: 'Martin Evergreen',
    comment: 'I’ve loved trains ever since I was a child. I dreamed about riding one around the world. This is the most fantastic thing I’ve seen yet, and I’m watching it ON a train!',
    likes: 3,
    timestamp: 1632512763000
  },
  {
    id: '191de346-b3c2-47b4-bf5b-6db90d1e3bdc',
    video_id: '76ca28c0-7dea-4553-887f-8e5129a80fc3',
    name: 'Emily Harper',
    comment: 'Let’s collaborate on a video for saving money on cheap train tickets! I’ll have my associates contact yours.',
    likes: 0,
    timestamp: 1632496261000
  }
]

module.exports = { comments }
