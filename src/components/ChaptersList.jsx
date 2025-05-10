import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function ChaptersList() {
  const [chapters, setChapters] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  function textCut(str) {
    if (str.length > 190) {
      return str.substring(0, 190) + "...";
    }
    return str;
  }

  useEffect(() => {
    const fetchChapters = async () => {
      const { data } = await supabase
        .from("chapters")
        .select("id, title, chapter_number, content")
        .order("chapter_number", { ascending: sortOrder === "asc" });

      setChapters(data);
    };

    fetchChapters();
  }, [sortOrder]);

  return (
    <div className="chapters-list">
      <div className="sort-buttons" style={{ textAlign: "center", margin: "1rem" }}>
        <button onClick={() => setSortOrder("asc")}>⬆️</button>
        <button onClick={() => setSortOrder("desc")} style={{ marginLeft: "1rem" }}>⬇️</button>
      </div>
      <div className="chapters">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="chapter">
            <Link to={`/read/${chapter.id}`}>
              <div className="chapter-card">
                <img src="/assets/IMG_20250424_162513.jpg" alt="HERO" />
                <div className="chapter-info">
                  <div className="title">
                    <h2>{chapter.title} </h2>
                    <p>-</p>
                    <p> {chapter.chapter_number}</p>
                  </div>
                  <p>{textCut(chapter.content)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
