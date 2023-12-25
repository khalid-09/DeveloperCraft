import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <>
      <div className="mt-28 flex flex-col gap-4 md:mt-32">
        <section>
          <ContactForm />
        </section>
        <section>
          <SocialLinks isContact={true} />
        </section>
      </div>
    </>
  );
};

export default Contact;
