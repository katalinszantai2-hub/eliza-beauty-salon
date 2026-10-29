const header=document.querySelector('.header');
const toggle=document.querySelector('.menu');
const nav=document.querySelector('.links');
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const updateHeader=()=>header?.classList.toggle('scrolled',window.scrollY>24);
updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Menü megnyitása':'Menü bezárása');nav?.classList.toggle('open',!open)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Menü megnyitása')}));
if('IntersectionObserver'in window&&!reduced){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -30px 0px'});document.querySelectorAll('.reveal').forEach((el,index)=>{el.style.transitionDelay=(Math.min(index%4,3)*75)+'ms';observer.observe(el)})}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
document.querySelectorAll('.guide-form.demo-form').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const status=form.querySelector('.form-status');if(status)status.textContent='Köszönöm az érdeklődést. A kisokos és a feliratkozás beküldése még nincs bekötve.'}));
document.querySelectorAll('form.netlify-form').forEach(form=>{
  const fields=[...form.querySelectorAll('.field input[required],.field textarea[required],.field select[required]')];
  const status=form.querySelector('.form-status');
  const submitButton=form.querySelector('[type="submit"]');
  let attempted=false;

  if(status){
    status.setAttribute('role','status');
    status.setAttribute('aria-atomic','true');
  }

  fields.forEach(field=>{
    const label=form.querySelector(`label[for="${field.id}"]`);
    if(label&&!label.querySelector('.required-mark')){
      const mark=document.createElement('span');
      mark.className='required-mark';
      mark.setAttribute('aria-hidden','true');
      mark.textContent=' *';
      label.append(mark);
    }
  });

  if(fields.length&&!form.querySelector('.required-note')){
    const note=document.createElement('p');
    note.className='required-note';
    note.textContent='A *-gal jelölt mezők kitöltése kötelező.';
    form.prepend(note);
  }

  const errorMessage=field=>{
    if(field.validity.valueMissing)return 'Kérlek, töltsd ki ezt a mezőt.';
    if(field.validity.typeMismatch&&field.type==='email')return 'Kérlek, adj meg egy érvényes e-mail-címet.';
    if(field.validity.tooShort)return `Legalább ${field.minLength} karaktert írj be.`;
    if(field.validity.tooLong)return `Legfeljebb ${field.maxLength} karaktert írj be.`;
    return field.validationMessage||'Kérlek, ellenőrizd ezt a mezőt.';
  };

  const showError=field=>{
    const wrapper=field.closest('.field');
    if(!wrapper)return;
    let error=wrapper.querySelector('.field-error');
    if(!error){
      error=document.createElement('span');
      error.className='field-error';
      error.id=`${field.id}-error`;
      error.setAttribute('role','alert');
      wrapper.append(error);
    }
    error.textContent=errorMessage(field);
    field.setAttribute('aria-invalid','true');
    field.setAttribute('aria-describedby',error.id);
  };

  const clearError=field=>{
    field.removeAttribute('aria-invalid');
    const error=field.closest('.field')?.querySelector('.field-error');
    if(error)error.remove();
    if(field.getAttribute('aria-describedby')===`${field.id}-error`)field.removeAttribute('aria-describedby');
  };

  fields.forEach(field=>{
    field.addEventListener('invalid',()=>{attempted=true;showError(field)});
    field.addEventListener('blur',()=>{if(!field.validity.valid)showError(field)});
    field.addEventListener('input',()=>{
      if(field.validity.valid)clearError(field);
      else if(attempted)showError(field);
    });
    field.addEventListener('change',()=>{
      if(field.validity.valid)clearError(field);
      else if(attempted)showError(field);
    });
  });

  form.addEventListener('submit',()=>{
    attempted=true;
    if(status)status.textContent='Küldés folyamatban…';
    form.setAttribute('aria-busy','true');
    if(submitButton){
      submitButton.disabled=true;
      submitButton.dataset.originalLabel=submitButton.textContent.trim();
      submitButton.textContent='Küldés folyamatban…';
    }
  });
  window.addEventListener('pageshow',()=>{
    form.removeAttribute('aria-busy');
    if(status)status.textContent='';
    if(submitButton){
      submitButton.disabled=false;
      if(submitButton.dataset.originalLabel)submitButton.textContent=submitButton.dataset.originalLabel;
    }
  });
});
const selectedPackage=new URLSearchParams(window.location.search).get('csomag');
const messageField=document.querySelector('#booking-message, #message');
if(selectedPackage&&messageField)messageField.value=`Érdeklődöm a(z) ${selectedPackage} csomagról.`;
