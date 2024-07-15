import { Button } from "@/components/ui/button";

interface DeleteProps {
  deleteLastCity: () => void;
}

export function Delete({ deleteLastCity }: DeleteProps) {
  return (
    <div className="ml-2">
      <Button onClick={deleteLastCity}>Löschen</Button>
    </div>
  );
}

export default Delete;
