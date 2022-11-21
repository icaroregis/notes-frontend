import React from 'react';
import { Button } from './style.js';

export default function CustomButton({ title, loading = false, ...rest }) {
  return (
    <Button type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Button>
  );
}
