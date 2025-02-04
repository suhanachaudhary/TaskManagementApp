import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav1 flex justify-between items-center shadow-lg rounded-lg bg-slate-800 px-4 py-3 shadow-md">
      <Link className="text-white font-bold" href={"/"}>
        MyTodo.
      </Link>
      <Link className="bg-white p-2 shadow-lg rounded-lg" href={"/addTopic"}>
        Add Task
      </Link>
    </nav>
  );
}
