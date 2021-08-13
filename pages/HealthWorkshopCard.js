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
            Produce 1 free health education workshop for an audience who
            urgently needs it, particularly for a community who faces major
            disparities in health conditions and care such as people of color,
            elders, young mothers including teen mothers, migrant workers,
            low-income families, foster families, unhoused families, and
            families of incarcerated parents.<br />
            Your donation covers health-themed mini gift bags, raffle prizes to
            motivate people to attend a workshop, equipment to run the workshop
            such as trainer simulaids for edema and breast disease, costs to
            hire public health educators to prepare presentation and take-home
            materials, and any venue costs if not donated.
          </p>
          <p>
          <form onSubmit={handleSubmit}>
              <button className="btn btn-primary">
              Produce 1 health workshop for $5000 <span />
              </button>
            </form>
          </p>
        </div>
      </div>
    
  );
}

export default HealthWorkshopCard;
