import React from 'react';

function HotMealDaySection() {
  return (
    <div className="text-center md:m-auto pb-20 md:pb-20 hero">
      <div className="bg-image hero">
        <div className="w-lg p-5">
          <div className="grid grid-cols-1">
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-3xl md:text-5xl text-white text-opacity-90 font-bold">
                {'Hot Meal Day'}
              </h2>
              <p className="text-white text-opacity-90">
                {
                  'Buy ingredients for 1 hot meal for 60 hungry people. Sample meals include spaghetti with Texas toast and caesar salad, chicken alfredo, enchilada taquitos. Served as take-home meal boxes at Grace Resources in Lancaster, California.'
                }
              </p>
              <p className="text-white text-opacity-90">
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac volutpat diam, vel dignissim turpis. Aenean euismod ipsum a ipsum pellentesque sollicitudin. Phasellus lobortis libero in pellentesque posuere. Nulla est diam, sodales porttitor diam sed, viverra dapibus massa. Proin rhoncus a est nec aliquam. Fusce ultricies purus ultrices mi placerat interdum. Proin dignissim felis a sem iaculis sollicitudin. Donec blandit ex eu arcu consectetur feugiat. Nullam mollis felis in erat mollis finibus sed eu orci. Sed varius gravida posuere. Aliquam eu velit non ante ultrices consectetur.'
                }
              </p>
              <p className="text-white text-opacity-90">
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac volutpat diam, vel dignissim turpis. Aenean euismod ipsum a ipsum pellentesque sollicitudin. Phasellus lobortis libero in pellentesque posuere. Nulla est diam, sodales porttitor diam sed, viverra dapibus massa. Proin rhoncus a est nec aliquam. Fusce ultricies purus ultrices mi placerat interdum. Proin dignissim felis a sem iaculis sollicitudin. Donec blandit ex eu arcu consectetur feugiat. Nullam mollis felis in erat mollis finibus sed eu orci. Sed varius gravida posuere. Aliquam eu velit non ante ultrices consectetur.'
                }
              </p>
              <a href="/upcoming-events">
                <button
                  className="btn btn-accent rounded-btn mt-5"
                  type="button"
                >
                  {'Read More'}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-image {
          background-image: linear-gradient(
              to right bottom,
              rgba(90, 76, 16, 0.6),
              rgba(20, 81, 116, 0.3)
            ),
            url(/images/HotMealDay.jpg);
          object-fit: cover;
          background-repeat: no-repeat;
        }
        .hero {
          min-height: 80vh;
          background-color: rgba(127, 17, 70, 1);
        }
      `}</style>
    </div>
  );
}

export default HotMealDaySection;
