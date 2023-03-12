import { createAction } from '@reduxjs/toolkit';

const clearHome = createAction('home/clear');
const requestHome = createAction('home/request');
const loadHomeSuccess = createAction<any>('home/success');
const loadHomeError = createAction<any>('home/error');

export {
    clearHome,
    requestHome,
    loadHomeSuccess,
    loadHomeError
};
