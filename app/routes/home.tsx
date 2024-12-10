import { Button } from "~/starter/Button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container p-6">
      <div className="bg-gradient-to-r from-teal-300 to-cyan-500 p-12 rounded-lg flex justify-center">
        <Button>Book flight</Button>
      </div>
    </div>
  );
}
