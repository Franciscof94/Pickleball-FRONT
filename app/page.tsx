import HomePage from "./home-page";

async function getShifts() {
  const res = await fetch("http://localhost:4002/shifts", {
    cache: "no-store",
  });
  const shifts = await res.json();
  return shifts;
}

export default async function Page() {
  const allShifts = await getShifts();

  return <HomePage allShifts={allShifts} />;
}
