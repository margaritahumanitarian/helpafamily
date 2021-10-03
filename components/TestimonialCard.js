// @ts-check
import Image from 'next/image';

const TestimonialCard = ({ content, image, title }) => {
  return (
    <div className="m-5 w-72  card glass lg:card text-neutral-content">
      <figure className="p-0">
        <Image
          alt="testimonial"
          className="shadow-lg"
          height={340}
          layout="responsive"
          src={image}
          width={500}
        />
      </figure>
      <div className="max-w-md card-body">
        <h2 className="card-title">{title}</h2>
        <div className="pt-4 h-40">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
