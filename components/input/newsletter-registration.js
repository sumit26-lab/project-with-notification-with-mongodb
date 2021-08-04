import classes from './newsletter-registration.module.css';
import {useRef} from 'react';
// fetch user input (state or refs)
// optional: validate input
// send valid data to API

function NewsletterRegistration() {
   const emailInputRef = useRef()
  function registrationHandler(event) {
    event.preventDefault();
    const enterEmail=emailInputRef.current.value;

    fetch('/api/newsletter',{
      method:'POST',
      body:JSON.stringify({email:enterEmail}),
      headers:{
        'Content-Type':'application/json',
      },
       
    }).then((responese)=>responese.json())
    .then((data =>console.log(data)))
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;