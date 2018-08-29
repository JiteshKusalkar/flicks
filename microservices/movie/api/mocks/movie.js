module.exports = {
  getAll(req, res, next) {
    res.json([{
      name: 'Zootopia',
      status: 'Released',
      rating: 5,
      description: 'Good Movie',
      showTimings: ['10:00', '13:00', '15:00'],
      releaseDate: '2018-05-09',
      showEndDate: '2018-05-29',
      trailerUrl: '/movies/Zootopia/trailer',
      posterUrl: '/movies/Zootopia/poster',
      cast: [{
        role: 'Director',
        name: 'Byron Howard',
        photourl: '/cast/Byron_Howard',
      }, {
        role: 'Co-Director',
        name: 'Jared Bush',
        photourl: '/cast/Jared_Bush',
      }],
      budget: 'Medium',
      genre: 'Cartoon',
      censorCertificate: 'UA',
    }, {
      name: 'Inside Out',
      status: 'Not Released',
      rating: undefined,
      description: 'Cartoon Movie',
      showTimings: [],
      releaseDate: '2018-05-21',
      showEndDate: '2018-06-29',
      trailerUrl: '/movies/Inside_Out/trailer',
      posterUrl: '/movies/Inside_Out/poster',
      cast: [{
        role: 'Director',
        name: 'Pete Docter',
        photourl: '/cast/Pete_Docter',
      }, {
        role: 'Writer',
        name: 'Michael Arndt',
        photourl: '/cast/Michael_Arndt',
      }],
      budget: 'Low',
      genre: 'Cartoon',
      censorCertificate: 'UA',
    }, {
      name: 'The Boss Baby',
      status: 'Released',
      rating: 4.5,
      description: 'Cartoon Movie',
      showTimings: ['13:00', '16:00', '19:00'],
      releaseDate: '2018-05-21',
      showEndDate: '2018-06-29',
      trailerUrl: '/movies/The_Boss_Baby/trailer',
      posterUrl: '/movies/The_Boss_Baby/poster',
      cast: [{
        role: 'Director',
        name: 'Tom McGrath',
        photourl: '/cast/Tom_McGrath',
      }, {
        role: 'Writer',
        name: 'Michael McCullers',
        photourl: '/cast/Michael_McCullers',
      }],
      budget: 'Big',
      genre: 'Cartoon',
      censorCertificate: 'UA',
    }, {
      name: 'Avengers- Infinity War',
      status: 'Released',
      rating: 5,
      description: 'There was an idea… Avengers: Infinity War. In theaters April 27.',
      showTimings: ['13:00', '16:00', '19:00'],
      releaseDate: '2018-04-27',
      showEndDate: '2018-05-30',
      trailerUrl: '/movies/Avengers_Infinity_War/trailer',
      posterUrl: '/movies/Avengers_Infinity_War/poster',
      cast: [{
        role: 'Lead Actor',
        name: 'Robert Downey Jr',
        photourl: '/cast/Robert_Downey_Jr',
      }, {
        role: 'Lead Actor',
        name: 'Chris Hemsworth',
        photourl: '/cast/Chris_Hemsworth',
      }, {
        role: 'Director',
        name: 'Anthony Russo',
        photourl: '/cast/Anthony_Russo',
      }, {
        role: 'Director',
        name: 'Joe Russo',
        photourl: '/cast/Joe_Russo',
      }],
      budget: 'Big',
      genre: 'Cartoon',
      censorCertificate: 'UA',
    }, {
      name: 'Mission: Impossible - Fallout',
      status: 'Not Released',
      rating: undefined,
      description: 'Watch the official trailer for Mission: Impossible - Fallout starring Tom Cruise. In theatres 7.27.18.',
      showTimings: [],
      releaseDate: '2018-07-27',
      showEndDate: undefined,
      trailerUrl: '/movies/Mission_Impossible_Fallout/trailer',
      posterUrl: '/movies/Mission_Impossible_Fallout/poster',
      cast: [{
        role: 'Lead Actress',
        name: 'Rebecca Ferguson',
        photourl: '/cast/Rebecca_Ferguson',
      }, {
        role: 'Lead Actor',
        name: 'Tom Cruise',
        photourl: '/cast/Tom_Cruise',
      }, {
        role: 'Director',
        name: 'Christopher McQuarrie',
        photourl: '/cast/Christopher_McQuarrie',
      }, {
        role: 'Writer',
        name: 'Christopher McQuarrie',
        photourl: '/cast/Christopher_McQuarrie',
      }, {
        role: 'Writer',
        name: 'Bruce Geller',
        photourl: '/cast/Bruce_Geller',
      }],
      budget: 'Big',
      genre: 'Cartoon',
      censorCertificate: 'UA',
    }]);
  },

  getByName(req, res, next) {
    res.json([{
      name: 'Zootopia',
      status: 'Released',
      rating: 5,
      description: 'Good Movie',
      showTimings: ['10:00', '13:00', '15:00'],
      releaseDate: '2018-05-09',
      showEndDate: '2018-05-29',
      trailerUrl: '/movies/Zootopia/trailer',
      posterUrl: '/movies/Zootopia/poster',
      cast: [{
        role: 'Director',
        name: 'Byron Howard',
        photourl: '/cast/Byron_Howard',
      }, {
        role: 'Co-Director',
        name: 'Jared Bush',
        photourl: '/cast/Jared_Bush',
      }],
      budget: 'Medium',
      genre: 'Cartoon',
      censorCertificate: 'UA',
    }])
  }
};
