import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <>
      <div className="mt-36 md:mt-44">
        <section>
          <SocialLinks isContact={true} />
        </section>
      </div>
    </>
  );
};

export default Contact;
