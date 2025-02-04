import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {topics.map((t) => (
        <div
          key={t._id}
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col justify-between"
        >
          <div>
            <h2 className="font-bold text-2xl text-gray-800">{t.title}</h2>
            <p className="text-gray-600 mt-2">{t.description}</p>
          </div>
          <div className="flex gap-3 mt-4 justify-end">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`} className="text-blue-500 hover:text-blue-700">
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
