import { Button } from "../ui/button";

const ZButton = ({ name, onclick }: { name: string; onclick?: () => void }) => {
  return (
    <Button
      onClick={onclick}
      type="submit"
      className="Zbutton  text-white px-6 py-2 rounded-md"
    >
      {name}
    </Button>
  );
};

export default ZButton;
