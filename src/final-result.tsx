import * as React from "react";
import { UserData } from "./types";

interface Props {
  userData: UserData;
}

const FinalResult: React.FC<Props> = ({ userData }) => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    const data = []; // TODO: run kriskros script
    setLoading(false);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    // TODO: print kriskros data from script
    <div>aa</div>
  );
};

export default FinalResult;
