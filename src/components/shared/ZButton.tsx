import { Button } from "../ui/button";

const ZButton = ({ name, onClick }: { name: string; onClick?: () => void }) => {
  return (
    <Button
      onClick={onClick}
      type="submit"
      className="Zbutton  text-white px-6 py-2 rounded-md"
    >
      {name}
    </Button>
  );
};

export default ZButton;
