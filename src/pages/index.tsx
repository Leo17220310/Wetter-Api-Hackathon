import Chart from "../sections/chart";
import InputWithButton from "../sections/inputField"; // Adjust path as per your project structure

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
      <Chart />
      <InputWithButton />
    </div>
  );
}
