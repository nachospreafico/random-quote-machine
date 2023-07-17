import UserMetrics from "./UserMetrics";
import UserGoals from "./UserGoals";

const UserInputContainer = () => {
  return (
    <form>
      <UserMetrics />
      <UserGoals />
      <button>Calculate</button>
    </form>
  );
};

export default UserInputContainer;
