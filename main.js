import { Roles } from 'meteor/alanning:roles';

Meteor.startup(() => {
  // Define roles
  Roles.createRole('admin');
  Roles.createRole('borrower');
  Roles.createRole('lender');
});

import { Transactions } from '/imports/api/transactions.js';

Meteor.publish('transactions', function() {
  return Transactions.find();
});

// server/main.js

import { Meteor } from 'meteor/meteor';
import { Loans } from '/imports/api/loans/loans.js';

Meteor.publish('loans.all', function() {
  return Loans.find();
});

