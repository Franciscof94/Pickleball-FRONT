import HomePage from "./home-page";

async function getShifts() {
  const res = await fetch(`${process.env.API_URL}`, {
    cache: "no-store",
  });
  const shifts = await res.json();
  return shifts;
}

export default async function Page() {
  const allShifts = await getShifts();

  return <HomePage allShifts={allShifts} />;
}
