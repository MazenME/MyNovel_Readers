import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function Reader() {
  const { id } = useParams();
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);
  const [fontSize, setFontSize] = useState(16);
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchChapters = async () => {
      const { data, error } = await supabase
        .from("chapters")
        .select("*")
        .order("chapter_number", { ascending: true });

      if (error) {
        console.error("Error fetching chapters:", error);
      } else {
        setChapters(data);
        const currentChapter = data.find((ch) => ch.id === id);
        setChapter(currentChapter);
      }
      setLoading(false);
    };

    fetchChapters();
  }, [id]);

  const handlePrev = async () => {
    const currentIndex = chapters.findIndex((chapter) => chapter.id === id);
    if (currentIndex > 0) {
      const prevChapter = chapters[currentIndex - 1];
      await updateViewersCounter(prevChapter.id);
      navigate(`/read/${prevChapter.id}`);
    }
  };

  const handleNext = async () => {
    const currentIndex = chapters.findIndex((chapter) => chapter.id === id);
    if (currentIndex < chapters.length - 1) {
      const nextChapter = chapters[currentIndex + 1];
      await updateViewersCounter(nextChapter.id);
      navigate(`/read/${nextChapter.id}`);
    }
  };

  const updateViewersCounter = async (chapterId) => {
    const { data, error } = await supabase
      .from("chapters")
      .select("viewers_counter")
      .eq("id", chapterId)
      .single();

    if (error) {
      console.error("Error fetching viewers counter:", error);
    } else {
      await supabase
        .from("chapters")
        .update({ viewers_counter: data.viewers_counter + 1 })
        .eq("id", chapterId);
    }
  };

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => Math.max(prevFontSize - 2, 12));
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  if (loading) return <p>Loading...</p>;
  if (!chapter)
    return <p>Chapter not found. Please check the URL or the data source.</p>;

  return (
    <>
      <div className={`reader ${darkMode ? "dark" : "light"}`}>
        <div className="dark-mode-toggle">
          <button className="darkBTN" onClick={toggleDarkMode}>
            {darkMode ? "🌞" : "🌚"}
          </button>
        </div>
        <h1>{chapter.title}</h1>
        <div className="cha">
          <h2>الفصل {chapter.chapter_number}</h2>
          <div className="font-size-controls">
            <button onClick={increaseFontSize}>+</button>
            <button onClick={decreaseFontSize}>-</button>
          </div>
        </div>
       <p style={{ fontSize: `${fontSize}px` }}>{chapter.content}</p>


        <div className="viewers-counter">
          {/* <p>عدد المشاهدات: {chapter.viewers_counter}</p> */}
        </div>
        <div className="navigation-buttons">
          <button
            onClick={handlePrev}
            disabled={chapters.findIndex((chapter) => chapter.id === id) === 0}
            className="prev-button"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={
              chapters.findIndex((chapter) => chapter.id === id) ===
              chapters.length - 1
            }
            className="next-button"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Reader;
