import React from 'react';

export const required = value => (value ? undefined : 'Requerido');

const MAX_PASS_LEN = 52;
const MIN_PASS_LEN = 8;
export const passLength = value =>
  value && (value.length > MAX_PASS_LEN || value.length < MIN_PASS_LEN)
    ? `Debe tener entre ${MIN_PASS_LEN} y ${MAX_PASS_LEN} caracteres`
    : undefined;

export const passFormat = value =>
  value && !(/[a-zA-Z]/.test(value) && /[0-9]/.test(value))
    ? 'Debe contener al menos una letra y un numero'
    : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Mail invalido' : undefined;

export const name = value =>
  value && !/^([a-zA-Z]*)$/.test(value) ? 'Solo debe contener letras' : undefined;
