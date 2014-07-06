App.User = DS.Model.extend({
  name:         DS.attr(),
  email:        DS.attr(),
  bio:          DS.attr(),
  avatarUrl:    DS.attr(),
  creationDate: DS.attr()
});

App.User.FIXTURES = [
  {
    id:           1,
    name:         'John Doe',
    email:        'john@doe.com',
    bio:          'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
    avatarUrl:    'http://www.johndoe.pro/img/John_Doe.jpg',
    creationDate: 'Sun, 6 Jul 2014 20:21:44 GMT'
  },
  {
    id:           2,
    name:         'Jane Doe',
    email:        'jane@doe.com',
    bio:          'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    avatarUrl:    'http://s0.limitedrun.com/images/1067698/v200_CVG-janedoe.jpg',
    creationDate: 'Sun, 6 Jul 2014 20:23:43 GMT'
  }
];