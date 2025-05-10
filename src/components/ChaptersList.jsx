import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function ChaptersList() {
  const [chapters, setChapters] = useState([]);

  function textCut(str) {
    if (str.length > length) {
      return str.substring(0, 190);
    }
    return str;
  }

  useEffect(() => {
    const fetchChapters = async () => {
      const { data } = await supabase
        .from("chapters")
        .select("id, title, chapter_number, content")
        .order("chapter_number", { ascending: true });

      setChapters(data);
    };

    fetchChapters();
  }, []);

  return (
    <div className="chapters-list">
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
