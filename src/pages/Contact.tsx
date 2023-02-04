import "./Contact.css";

export const Contact = () => (
  <div>
    <p className="contactTitle">Fill out this form and we will get back to you as long as we get it</p>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="phone">Phone</label>
      <input type="phone" id="phone" name="phone" />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <input type="submit" value="Send message" />
    </form>
  </div>
);