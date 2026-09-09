// Página de contacto: el chrome compartido más el envío del formulario de
// voluntariado, que entra por la misma API que el registro de la home pero
// marcado como formLocation "contact".
import './site-chrome';
import { submitLead } from '../lib/leads';

const form = document.querySelector<HTMLFormElement>('[data-volunteer]');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const boton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (boton) {
    boton.disabled = true;
    boton.style.opacity = '.7';
    boton.style.cursor = 'progress';
  }

  const data = new FormData(form);
  const lang = (form.dataset.lang === 'en' ? 'en' : 'es') as 'es' | 'en';

  await submitLead({
    name: String(data.get('nombre') || ''),
    email: String(data.get('email') || ''),
    phone: String(data.get('telefono') || ''),
    zip: String(data.get('zip') || ''),
    helpType: String(data.get('ayuda') || ''),
    formLocation: 'contact',
    lang
  });

  form.closest('[data-form-wrap]')?.setAttribute('data-sent', '');
});
