import classes from './newsletter-registration.module.css';
import {useRef,useContext} from 'react';
import NotificationContext from '../../store//notification-context'
// fetch user input (state or refs)
// optional: validate input
// send valid data to API

function NewsletterRegistration() {
   const emailInputRef = useRef()
   const notificationCtx=useContext(NotificationContext)
  function registrationHandler(event) {
    event.preventDefault();
    const enterEmail=emailInputRef.current.value;
    notificationCtx.showNotification({
      title:'Siging Up ---',
      message:'Registering for newletter',
      status:'pending'
    })

    
    fetch('/api/newsletter',{ 
      method:'POST',
      body:JSON.stringify({email:enterEmail}),
      headers:{
        'Content-Type':'application/json',
      },
       
    }).then((responese)=>{
      if(responese.ok){
        return responese.json()
      }
      return responese.json().then((data)=>{
        throw new Error(data.message ||'SomeThing Went wrong'); 
      });
    })
    .then((data) =>{
      notificationCtx.showNotification({
        title:'Success!',
        message:'SuccessFuliy Registering for NewsLetter ',
        status:'success'
      });
  
    })
    .catch((error)=>{
      notificationCtx.showNotification({
        title:'Error',
        message: error.message||'Some thing went Worng',
        status:'error'
      });
  
    })
    
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
