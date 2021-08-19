import { useRouter } from "next/router";

function HealthWorkshopCard() {
    const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

      const response = await fetch("/api/create-stripe-session", {
        body: JSON.stringify({
          amount: 5000*100,
          cause: "Producing Health Workshop",
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = await response.json();
      router.push(result.url);
  };
  return (
    
      <div className="card lg:card-side bordered">
        <div className="card-body">
          <h2 className="card-title">Health Education Workshop</h2>
          <p className="mb-3">
          Help in establishing one free health education workshop for a community that is facing major disparities in health conditions 
          and to help those people who need care and attention.</p>
          <p className="mb-3">
          Also, your donation will go toward health-themed mini gift bags to motivate people to attend a workshop, 
          equipment such as trainer simulaids for edema and breast disease, 
          venue costs, and to hire public health educators to prepare presentations.
          </p>
          <p>
          <form onSubmit={handleSubmit}>
              <button className="btn btn-primary">
              Help Create 1 Health Workshop for $5000 <span />
              </button>
            </form>
          </p>
        </div>
      </div>
    
  );
}

export default HealthWorkshopCard;
