 "use client";
import { useState } from "react";

const WORK = [
  {
    title: "Running a Hit Show's Digital After Party",
    subtitle: "Will & Grace",
    role: "Executive Producer",
    desc: "Led a full digital aftershow from concept through delivery, shaping format, editorial, and talent-driven segments.",
    link: "https://www.youtube.com/watch?v=jNzUVqPnkNE",
    videoId: "jNzUVqPnkNE",
    embedUrl: "https://www.youtube.com/embed/jNzUVqPnkNE?si=IgNSWQXEzMm6hH1U&autoplay=1",
    thumbImg: "/mnt/user-data/uploads/willandgrace.png",
    category: "Showrunner / Formats",
  },
  {
    title: "Can Anyone Beat Mario Lopez?",
    subtitle: "Celebrity Game Format",
    role: "Creator & Producer",
    desc: "Built a recurring celebrity trivia format combining gameplay, humor, and talent interaction.",
    link: "https://www.accessonline.com/videos/can-these-contestants-beat-mario-lopez-in-celebrity-trivia",
    videoId: null,
    embedUrl: "https://www.accessonline.com/embed-video/can-these-contestants-beat-mario-lopez-in-celebrity-trivia",
    thumbImg: "/mnt/user-data/uploads/beatmario.png",
    category: "Showrunner / Formats",
  },
  {
    title: "Nick Cannon Takes the Quiz That Flips the Interview",
    subtitle: "Access Hollywood",
    role: "Coordinating Producer",
    desc: "Concepted and produced a custom interview format blending personality-driven questions with structured gameplay.",
    link: "https://youtu.be/WLEesT7h8Fg?si=Taljzf9PFxa9Kj0s&t=525",
    videoId: "WLEesT7h8Fg",
    embedUrl: "https://www.youtube.com/embed/WLEesT7h8Fg?si=csB80qhVpHKtIzS-&start=525&autoplay=1",
    thumbImg: "/mnt/user-data/uploads/nickdadababy.png",
    category: "Showrunner / Formats",
  },
  {
    title: "Bert Kreischer Gives Adam Credit for Discovering Him",
    subtitle: "Access Hollywood",
    role: "Coordinating Producer",
    desc: "Produced a standout interview moment highlighting talent relationships, story instinct, and editorial timing.",
    link: "https://www.accessonline.com/videos/bert-kreischer-chokes-up-thinking-about-how-far-he-has-come-in-his-career",
    videoId: null,
    embedUrl: "https://www.accessonline.com/embed-video/bert-kreischer-chokes-up-thinking-about-how-far-he-has-come-in-his-career",
    thumbImg: "/mnt/user-data/uploads/bert.png",
    category: "Talent + Interviews",
  },
  {
    title: "Turning a Brand Deal Into Memorable Entertainment",
    subtitle: "The Real",
    role: "Senior Producer",
    desc: "Wrote and directed a branded segment balancing sponsor goals with show tone, pacing, and audience engagement.",
    link: "https://www.youtube.com/watch?v=TnZ86XsJ1YQ",
    videoId: "TnZ86XsJ1YQ",
    embedUrl: "https://www.youtube.com/embed/TnZ86XsJ1YQ?si=a6XF0VsGRofroV68&autoplay=1",
    thumbImg: "/mnt/user-data/uploads/thereal.png",
    category: "Branded Content",
  },
  {
    title: "Hilarious Comedy Team 'Frangela" Take Down Action Movies",
    subtitle: "Comedy Field Piece",
    role: "Producer / Director",
    desc: "Wrote and directed a comedy-driven field piece built around performance, pace, and a strong comedic point of view.",
    link: "https://youtu.be/CG5NBIAVI4U?si=W4ew_ngceA0wUIdD",
    videoId: "CG5NBIAVI4U",
    thumbImg: "/mnt/user-data/uploads/frangelaj.png",
    category: "Comedy / Directing",
  },
];

const PODCASTS = [
  {
    title: "Fail Fast with Adam and Reggie",
    desc: "Long-form conversations built around candid storytelling, comedy, and lived creative experience.",
    art: "/mnt/user-data/uploads/failfast.png",
    link: "https://open.spotify.com/show/1lh0GkUaD36FsszAN5mRjI",
    linkLabel: "Listen on Spotify",
  },
  {
    title: "Proudly Resents",
    desc: "The cult movie podcast — interview-driven entertainment with a strong point of view and deep producing instincts.",
    art: "/mnt/user-data/uploads/proudlyresents.png",
    link: "https://proudlyresents.com",
    linkLabel: "Visit proudlyresents.com",
  },
];

const WRITING = [
  {
    title: "The Couple Who Taught Me How Show Business Really Works",
    tag: "Essay",
    link: "https://substack.com/@kingspiegs/p-182739413",
  },
  {
    title: "What Producing Taught Me About Attention",
    tag: "Essay",
    link: "https://substack.com/@kingspiegs/p-184517141",
  },
  {
    title: "A Highly Personal Magazine Piece About Parenting",
    tag: "Published",
    link: "https://adamspiegelman.blogspot.com/2018/07/blog-post.html",
  },
];

const CREDITS = [
  { role: "Coordinating Producer", show: "Access Hollywood / Access Daily", network: "", years: "2019–2025" },
  { role: "Games Producer", show: "That's My Jam", network: "NBC", years: "2019" },
  { role: "Producer", show: "Martha & Snoop Potluck Party Challenge", network: "VH1", years: "2019" },
  { role: "Executive Producer", show: "XPRIZE Podcast", network: "", years: "2018" },
  { role: "Consulting Producer", show: "Me Time with Frangela", network: "", years: "2018" },
  { role: "Supervising Producer", show: "Bossip", network: "WE tv", years: "2018" },
  { role: "Consulting Producer", show: "Dish Nation", network: "", years: "2018" },
  { role: "Supervising Producer", show: "Will & Grace After Party", network: "NBC Digital", years: "2017" },
  { role: "Senior Producer", show: "SYFY Live from Comic Con", network: "SYFY", years: "2016" },
  { role: "Senior Producer", show: "The Real", network: "Telepictures", years: "2015–2017" },
  { role: "Senior Producer", show: "The Queen Latifah Show", network: "Sony", years: "2014–2015" },
  { role: "Senior Producer", show: "The Arsenio Hall Show", network: "CBS", years: "2013–2014" },
  { role: "Senior Producer", show: "Totally Biased with W. Kamau Bell", network: "FXX", years: "2013" },
  { role: "Comedy Producer", show: "The Meredith Vieira Show (Pilot)", network: "NBC", years: "2013" },
  { role: "Senior Producer", show: "Judge Alex", network: "FOX", years: "2012–2013" },
  { role: "Writer", show: "Alma Awards", network: "NBC", years: "2012" },
  { role: "Supervising Producer", show: "The Naked Truth w/ Tom Papa (Pilot)", network: "TBS", years: "2012" },
  { role: "Consulting Producer", show: "@RobDelaney (Pilot)", network: "Comedy Central", years: "2011" },
  { role: "Producer", show: "Lopez Tonight", network: "TBS", years: "2010–2011" },
  { role: "Co-Creator", show: "Late Night Liars", network: "GSN", years: "2010" },
  { role: "Senior Producer", show: "Jimmy Kimmel Live!", network: "ABC", years: "2002–2010" },
];

const CATEGORIES = ["All", "Showrunner / Formats", "Talent + Interviews", "Branded Content", "Comedy / Directing"];

const ABOUT_GRAFS = [
  "Adam Spiegelman is an executive producer and showrunner specializing in talent-driven television, digital video, and podcasts.",
  "He develops and runs formats from the ground up—shaping concepts, working directly with talent, and leading production through final delivery. His work spans celebrity interviews, original formats, comedy, and branded content, with a focus on creating segments and shows that are both structured and highly watchable.",
  "Adam has produced across major platforms including Access Hollywood and The Real, where he built segments, led integrations, and consistently delivered content designed to engage both broadcast and digital audiences.",
  "He operates at the intersection of editorial, production, and performance—equally comfortable developing a format, directing on set, or shaping a conversation in the moment.",
  "Currently, he focuses on developing and producing video podcasts and digital shows that combine strong storytelling with talent-first execution.",
];

function PlayButton() {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(20,12,4,0.2)" }}>
      <div style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(253,248,242,0.93)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "15px solid #3d2710", marginLeft: 3 }} />
      </div>
    </div>
  );
}

function VideoThumb({ item }) {
  const [playing, setPlaying] = useState(false);

  const canPlay = !!(item.videoId || item.embedUrl);
  const thumbSrc = item.thumbImg
    ? item.thumbImg
    : item.videoId
    ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
    : null;

  const embedSrc = item.embedUrl
    ? item.embedUrl
    : item.videoId
    ? `https://www.youtube.com/embed/${item.videoId}?autoplay=1`
    : null;

  if (playing && embedSrc) {
    return (
      <div style={{ position: "relative", paddingTop: "56.25%", background: "#1a1208", borderRadius: 3 }}>
        <iframe
          src={embedSrc}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", borderRadius: 3 }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          crossOrigin="anonymous"
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => canPlay && setPlaying(true)}
      style={{
        position: "relative", paddingTop: "56.25%",
        background: "#e8ddd0", borderRadius: 3, overflow: "hidden",
        cursor: canPlay ? "pointer" : "default",
      }}
    >
      {thumbSrc && (
        <img src={thumbSrc} alt={item.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      )}
      {!thumbSrc && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ fontFamily: "'Lora', serif", fontSize: 13, fontStyle: "italic", color: "#b09a80" }}>{item.subtitle}</p>
        </div>
      )}
      {canPlay && <PlayButton />}
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? WORK : WORK.filter(w => w.category === filter);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fdf8f2", color: "#2c1f0e", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .as-nav-btn { background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 12px; letter-spacing: 0.09em; text-transform: uppercase; color: #9a7d5e; transition: color 0.15s; padding: 0; }
        .as-nav-btn:hover { color: #2c1f0e; }
        .as-filter { background: none; border: none; border-bottom: 2px solid transparent; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #9a7d5e; padding: 8px 18px 8px 0; transition: all 0.15s; }
        .as-filter:hover { color: #2c1f0e; }
        .as-filter.on { color: #2c1f0e; border-bottom-color: #c49a6c; }
        .as-card:hover .as-card-h { text-decoration: underline; text-decoration-color: #c49a6c; text-underline-offset: 3px; }
        .as-wrow { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding: 20px 0; border-bottom: 0.5px solid #ddd3c4; text-decoration: none; color: inherit; transition: opacity 0.15s; }
        .as-wrow:hover { opacity: 0.65; }
        .as-wrow:first-child { border-top: 0.5px solid #ddd3c4; }
        .as-clink { display: block; font-family: 'Lora', serif; font-size: 20px; color: #f0e4d4; text-decoration: none; border-bottom: 0.5px solid #3d2c1a; padding-bottom: 18px; margin-bottom: 18px; transition: color 0.15s; }
        .as-clink:hover { color: #c49a6c; }
        .as-hr { border: none; border-top: 0.5px solid #ddd3c4; max-width: 1140px; margin: 0 auto; padding: 0 28px; }
        @media (max-width: 768px) {
          .g2 { grid-template-columns: 1fr !important; }
          .g3 { grid-template-columns: 1fr !important; }
          .h1 { font-size: 38px !important; }
          .dnav { display: none !important; }
        }
        @media (min-width: 769px) { .mnav { display: none !important; } }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(253,248,242,0.96)", backdropFilter: "blur(6px)", borderBottom: "0.5px solid #ddd3c4" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Lora', serif", fontSize: 16, color: "#2c1f0e" }}>Adam Spiegelman</span>
          <div className="dnav" style={{ display: "flex", gap: 28 }}>
            {["home","video","podcasts","writing","credits","about","contact"].map(id => (
              <button key={id} className="as-nav-btn" onClick={() => scrollTo(id)} style={{ textTransform: "capitalize" }}>{id}</button>
            ))}
          </div>
        </div>
        <div className="mnav" style={{ display: "flex", overflowX: "auto", padding: "0 28px 10px", gap: 0, borderTop: "0.5px solid #ede3d6" }}>
          {["home","video","podcasts","writing","credits","about","contact"].map(id => (
            <button key={id} className="as-nav-btn" onClick={() => scrollTo(id)} style={{ whiteSpace: "nowrap", padding: "4px 14px 4px 0", textTransform: "capitalize" }}>{id}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ maxWidth: 1140, margin: "0 auto", padding: "76px 28px 64px" }}>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 272px", gap: 56, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#b08d68", marginBottom: 18 }}>Executive Producer &amp; Showrunner</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 26 }}>
              <div style={{ width: 32, height: 1.5, background: "#c49a6c" }} />
              <div style={{ width: 8, height: 1.5, background: "#ddd3c4" }} />
            </div>
            <h1 className="h1" style={{ fontFamily: "'Lora', serif", fontSize: 56, fontWeight: 400, lineHeight: 1.1, color: "#1a0f04", letterSpacing: "-0.01em", maxWidth: 660 }}>
              I build and run<br /><em>talent-driven shows</em><br />across TV, digital,<br />and video podcasts.
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#7a6248", marginTop: 26, lineHeight: 1.8, maxWidth: 460, fontWeight: 300 }}>
              Fifteen years of getting the most out of talent on camera — combining format, story, and performance to create content that actually holds attention.
            </p>
          </div>
          <div style={{ paddingTop: 6 }}>
            <div style={{ background: "#f5ede0", borderRadius: 4, padding: "22px 20px", marginBottom: 20 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b08d68", marginBottom: 16 }}>Specialties</p>
              {["Showrunning & Format Development","Talent-Driven Interviews","Comedy & Field Production","Branded Content & Integrations","Video Podcast Production"].map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i < 4 ? 13 : 0 }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#c49a6c", flexShrink: 0 }} />
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#5a3e28", fontWeight: 300, lineHeight: 1.3 }}>{s}</p>
                </div>
              ))}
            </div>
            <div style={{ borderLeft: "2px solid #c49a6c", paddingLeft: 14, borderRadius: 0 }}>
              <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: 13, color: "#a08060", lineHeight: 1.7 }}>
                "Equally comfortable developing a format, directing on set, or shaping a conversation in the moment."
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="as-hr" />

      {/* VIDEO */}
      <section id="video" style={{ maxWidth: 1140, margin: "0 auto", padding: "68px 28px" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b08d68", marginBottom: 8 }}>Selected Work</p>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 30, fontWeight: 400, color: "#1a0f04", marginBottom: 0 }}>Formats, interviews, comedy &amp; branded.</h2>
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: 24, marginBottom: 40, borderBottom: "0.5px solid #ddd3c4" }}>
          {CATEGORIES.map(cat => (
            <button key={cat} className={`as-filter${filter === cat ? " on" : ""}`} onClick={() => setFilter(cat)}>{cat}</button>
          ))}
        </div>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "44px 40px" }}>
          {filtered.map(item => (
            <div key={item.title} className="as-card">
              <VideoThumb item={item} />
              <div style={{ marginTop: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b08d68" }}>{item.role}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#cbbda8" }}>{item.category}</p>
                </div>
                <a href={item.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <h3 className="as-card-h" style={{ fontFamily: "'Lora', serif", fontSize: 20, fontWeight: 400, lineHeight: 1.3, color: "#1a0f04", marginBottom: 5 }}>{item.title}</h3>
                  {item.subtitle && <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: 14, color: "#b08d68", marginBottom: 7 }}>{item.subtitle}</p>}
                </a>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#7a6248", lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="as-hr" />

      {/* PODCASTS */}
      <section id="podcasts" style={{ maxWidth: 1140, margin: "0 auto", padding: "68px 28px" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b08d68", marginBottom: 8 }}>Podcasts</p>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 30, fontWeight: 400, color: "#1a0f04", marginBottom: 10 }}>Long-form conversations, shaped with story in mind.</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#7a6248", fontWeight: 300, lineHeight: 1.7, maxWidth: 500, marginBottom: 36 }}>Produced from concept through delivery — structure, pacing, and interview craft built in from the start.</p>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
          {PODCASTS.map((pod) => (
            <div key={pod.title} style={{ borderRadius: 4, overflow: "hidden", border: "0.5px solid #ddd3c4" }}>
              <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                <img src={pod.art} alt={pod.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "18px 20px 22px", background: "#f5ede0" }}>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: 17, fontWeight: 400, color: "#1a0f04", marginBottom: 8, lineHeight: 1.35 }}>{pod.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#7a6248", lineHeight: 1.65, fontWeight: 300, marginBottom: 14 }}>{pod.desc}</p>
                <a href={pod.link} target="_blank" rel="noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#c49a6c", textDecoration: "none", borderBottom: "1px solid #e8d5b8", paddingBottom: 2 }}>
                  {pod.linkLabel} ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="as-hr" />

      {/* WRITING */}
      <section id="writing" style={{ maxWidth: 1140, margin: "0 auto", padding: "68px 28px" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b08d68", marginBottom: 8 }}>Writing &amp; Published Work</p>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 30, fontWeight: 400, color: "#1a0f04", marginBottom: 10 }}>Stories and essays with a point of view.</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#7a6248", fontWeight: 300, lineHeight: 1.7, maxWidth: 500, marginBottom: 36 }}>
          About television, digital media, booking talent, and the strange mechanics of making something watchable.
        </p>
        <div>
          {WRITING.map(item => (
            <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="as-wrow">
              <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c49a6c", minWidth: 60 }}>{item.tag}</span>
                <span style={{ fontFamily: "'Lora', serif", fontSize: 20, fontWeight: 400, color: "#1a0f04", lineHeight: 1.35 }}>{item.title}</span>
              </div>
              <span style={{ color: "#c49a6c", fontSize: 14, flexShrink: 0 }}>↗</span>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <a href="https://substack.com/@kingspiegs/posts" target="_blank" rel="noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#c49a6c", textDecoration: "none", borderBottom: "1px solid #e8d5b8", paddingBottom: 2 }}>
            Read all essays on Substack ↗
          </a>
        </div>
      </section>

      <hr className="as-hr" />

      {/* CREDITS */}
      <section id="credits" style={{ maxWidth: 1140, margin: "0 auto", padding: "68px 28px" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b08d68", marginBottom: 8 }}>Work Experience</p>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 30, fontWeight: 400, color: "#1a0f04", marginBottom: 36 }}>
          Twenty years of making television.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }} className="g2">
          {CREDITS.map((c, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr auto",
              alignItems: "baseline", gap: "4px 16px",
              padding: "14px 0", borderBottom: "0.5px solid #ddd3c4",
            }}>
              <div>
                <p style={{ fontFamily: "'Lora', serif", fontSize: 16, fontWeight: 400, color: "#1a0f04", lineHeight: 1.3 }}>{c.show}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#b08d68", marginTop: 3, fontWeight: 300 }}>
                  {c.role}{c.network ? ` — ${c.network}` : ""}
                </p>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#cbbda8", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>{c.years}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="as-hr" />
      <section id="about" style={{ maxWidth: 1140, margin: "0 auto", padding: "68px 28px" }}>
        <div className="g2 as-about-grid" style={{ display: "grid", gridTemplateColumns: "290px 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: 4, marginBottom: 20, overflow: "hidden" }}>
              <img
                src="/mnt/user-data/uploads/467513223_10162671246517518_9121310483649401444_n.jpg"
                alt="Adam Spiegelman"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div style={{ borderLeft: "2px solid #c49a6c", paddingLeft: 14 }}>
              <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: 13, color: "#9a7d5e", lineHeight: 1.7 }}>
                "The kind of producer who can develop a format, direct on set, and shape a conversation in the moment — all in the same week."
              </p>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b08d68", marginBottom: 8 }}>About</p>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 400, color: "#1a0f04", marginBottom: 30, lineHeight: 1.2 }}>
              Senior-level production<br /><em>without the hand-holding.</em>
            </h2>
            {ABOUT_GRAFS.map((p, i) => (
              <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#5a4430", lineHeight: 1.85, marginBottom: 18, fontWeight: 300 }}>{p}</p>
            ))}
            <div style={{ marginTop: 32, borderTop: "0.5px solid #ddd3c4", paddingTop: 24 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b08d68", marginBottom: 16 }}>Podcast Interviews with Adam</p>
              {[
                { label: "Adam talks about booking comedians", href: "https://playlist.megaphone.fm/?e=ADV3409850751" },
                { label: "Adam talks about his journey from Kimmel to Access", href: "https://open.spotify.com/episode/6ML2Dn5wBX0feLscqmUEKe" },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  fontFamily: "'Lora', serif", fontSize: 16, fontWeight: 400, color: "#1a0f04",
                  textDecoration: "none", padding: "12px 0", borderBottom: "0.5px solid #ddd3c4",
                  transition: "opacity 0.15s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.6"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  <span>{item.label}</span>
                  <span style={{ color: "#c49a6c", fontSize: 13, flexShrink: 0, marginLeft: 16 }}>Listen ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" style={{ background: "#1a0f04" }}>
        <div style={{ height: 3, background: "#c49a6c" }} />
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "72px 28px 64px" }}>
          <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end" }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a3e28", marginBottom: 14 }}>Contact</p>
              <h2 style={{ fontFamily: "'Lora', serif", fontSize: 52, fontWeight: 400, lineHeight: 1.08, color: "#f0e4d4" }}>
                Let's<br /><em>talk.</em>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#6b5030", marginTop: 20, lineHeight: 1.75, fontWeight: 300, maxWidth: 360 }}>
                Available for executive producing, showrunning, and video podcast production.
              </p>
            </div>
            <div style={{ paddingBottom: 4 }}>
              <a href="mailto:AdamSpiegelman@icloud.com" className="as-clink">AdamSpiegelman@icloud.com ↗</a>
              <a href="https://www.linkedin.com/in/adam-spiegelman/" target="_blank" rel="noreferrer" className="as-clink">LinkedIn ↗</a>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: "0.14em", color: "#4a3018", textTransform: "uppercase" }}>Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
