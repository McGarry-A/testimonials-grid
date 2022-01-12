import "./Testimonial.css";

const Testimonial = ({ classes, name, title, quote, image }) => {
  return (
    <div className={classes}>
      <div className="testimonial-body">
        <div className="testimonial-avatar-container">
          <div className="testimonial-avatar-image">
            <img src={image} alt="avatar" />
          </div>
          <div className="testimonial-avatar-text">
            <h3>{name}</h3>
            <p>Verified Graduate</p>
          </div>
        </div>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{quote}</p>
      </div>
    </div>
  );
};

export default Testimonial;
