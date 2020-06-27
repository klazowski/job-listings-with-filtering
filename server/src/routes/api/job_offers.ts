import express from 'express';
const router = express.Router();

import JobOffer from '../../models/JobOffer';

// @route GET api/job-offers
// @desc Get all job offers
// @access Public
router.get('/', (request, response) => {
  JobOffer.find()
    .sort({ featured: -1, new: -1, postedAt: -1 })
    .then((offers) => response.json(offers));
});

// @route POST api/job-offers
// @desc Create job offer
// @access Public
router.post('/', (request, response) => {
  const newOffer = new JobOffer({
    company: request.body.company,
    logo: request.body.logo,
    new: request.body.new,
    featured: request.body.featured,
    position: request.body.position,
    role: request.body.role,
    level: request.body.level,
    contract: request.body.contract,
    location: request.body.location,
    languages: request.body.languages || [],
    tools: request.body.tools || [],
  });
  newOffer.save().then((offer) => response.json(offer));
});

// @route PUT api/job-offers
// @desc Update job offer.
// @access Public
router.put('/:id', (request, response) => {
  JobOffer.findByIdAndUpdate(
    request.params.id,
    {
      company: request.body.company,
      logo: request.body.logo,
      new: request.body.new,
      featured: request.body.featured,
      position: request.body.position,
      role: request.body.role,
      level: request.body.level,
      contract: request.body.contract,
      location: request.body.location,
      languages: request.body.languages,
      tools: request.body.tools,
    },
    { new: true, omitUndefined: true }
  )
    .then((offer) => response.json({ success: true, job_offer: offer }))
    .catch((error) =>
      response.status(404).json({
        success: false,
        message: `Job offer with _id:${request.params.id} not found.`,
      })
    );
});

// @route DELETE api/job-offers/:id
// @desc Delete job offer
// @access Public
router.delete('/:id', (request, response) => {
  JobOffer.findById(request.params.id)
    .then((offer) => {
      if (offer) offer.remove();
    })
    .then(() => response.json({ success: true }))
    .catch((error) => {
      response
        .status(404)
        .json({ success: false, message: 'Item does not exist' });
    });
});

module.exports = router;
