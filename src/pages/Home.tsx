import { Button } from "@ui/buttons";
import { logout } from "@utils/firebase";
import { useAuth } from "@utils/hooks";

export const Home = () => {
  const {setAuth} = useAuth()
  return (
    <>
      <div>store</div>
      <div>
        <Button  onClick={() => {
          logout()
          setAuth(false)
        }}>check loging</Button>
      </div>
    </>
  );
};
