import { useSelector } from "react-redux";

export default function Username() {
  const { username } = useSelector((store) => store.user);

  if (!username) return;
  return <div className=" text-sm font-semibold"> {username}</div>;
}
