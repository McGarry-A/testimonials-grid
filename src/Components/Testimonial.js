import "./Testimonial.css";

const Testimonial = ({
  classes,
  name,
  title,
  quote,
  image,
  bgImage,
  color,
  textWhite,
}) => {
  return (
    <div
      className={classes}
      style={{ color: textWhite ? "white" : "black", backgroundColor: color }}
    >
      {bgImage && <img src={bgImage} className="bgImage" alt="bg" />}
      <div className="testimonial-body">
        <div className="testimonial-avatar-container">
          <div className="testimonial-avatar-image">
            <img src={image} className="avatar-image" alt="avatar" style={{border: textWhite ? "4px solid #eee" : "none"}} />
          </div>
          <div className="testimonial-avatar-text">
            <h3 className="testimonial-avatar-name">{name}</h3>
            <p className="testimonial-avatar-verified">Verified Graduate</p>
          </div>
        </div>
      </div>
      <div className="testimonial-title-contianer">
        <h2 className="testimonial-title">{title}</h2>
      </div>
      <div>
        <p className="testimonial-quote">"{quote}"</p>
      </div>
    </div>
  );
};

export default Testimonial;
