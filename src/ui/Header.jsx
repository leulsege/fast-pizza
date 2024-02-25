import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-400 px-4 py-3 uppercase tracking-widest sm:px-6">
      <Link to="/">Fast Pizza .Co</Link>

      <SearchOrder />
      <Username />
    </header>
  );
}
