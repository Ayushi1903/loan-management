// imports/api/loans/loans.js

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Loans = new Mongo.Collection('loans');

const LoanSchema = new SimpleSchema({
  userId: {
    type: String,
    label: 'User ID',
  },
  amount: {
    type: Number,
    label: 'Loan Amount',
  },
  status: {
    type: String,
    label: 'Loan Status',
    allowedValues: ['requested', 'approved', 'rejected', 'repaid'],
    defaultValue: 'requested',
  },
});

Loans.attachSchema(LoanSchema);

Meteor.methods({
  'loans.create'(userId, amount) {
    // Validate input
    check(userId, String);
    check(amount, Number);

    // Insert new loan
    Loans.insert({
      userId: userId,
      amount: amount,
      status: 'requested',
    });
  },

  'loans.approve'(loanId) {
    // Validate input
    check(loanId, String);

    // Update loan status to 'approved'
    Loans.update(loanId, {
      $set: { status: 'approved' },
    });
  },

  'loans.reject'(loanId) {
    // Validate input
    check(loanId, String);

    // Update loan status to 'rejected'
    Loans.update(loanId, {
      $set: { status: 'rejected' },
    });
  },

  'loans.repay'(loanId) {
    // Validate input
    check(loanId, String);

    // Update loan status to 'repaid'
    Loans.update(loanId, {
      $set: { status: 'repaid' },
    });
  },

  'loans.delete'(loanId) {
    // Validate input
    check(loanId, String);

    // Remove loan
    Loans.remove(loanId);
  },
});



