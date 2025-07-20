import { Link } from "react-router-dom";

// Import Componenst
import Button from "../Button";
// Import icons
import { FcSearch } from "react-icons/fc";

export default function SearchInput({ textBtn, urlLink, setNameMovie }) {
  return (
    <div className="search-input-container flex items-center gap-5 w-full rounded-sm pl-4">
      <FcSearch className="hidden text-3xl" />
      <input
        type="text"
        placeholder="Search Movies..."
        className="w-full outline-none text-xl font-sans placeholder-search"
        onChange={(e) => setNameMovie(e.target.value)}
      />
      <Link to={urlLink}>
        <Button type="submit" text={textBtn} />
      </Link>
    </div>
  );
}
