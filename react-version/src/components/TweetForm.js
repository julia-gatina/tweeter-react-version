import React from 'react'; //optional

  function TweetForm(){
    const preventDefault = (event) => {
      event.preventDefault();
    };
    const question = "What are you humming about?";
    return (
      <section className="newtweet">
        <form onSubmit={preventDefault} method="post" action="/tweets" className="newtweet__form">
          <textarea className="form__textarea" name="text" placeholder={question}></textarea>
          <input onClick={preventDefault} type="submit" value="Tweet" className="form__input"/>
          <span className="form__counter">140</span>
        </form>
      </section>
    );
  };

  export default TweetForm;