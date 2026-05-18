import React, { useState, useEffect } from "react";
import { PASTEL, WA, REVIEW_SERVICES } from "../../constants/config.js";
import { supabase } from "../../lib/supabase.js";
import SectionHead from "../ui/SectionHead.jsx";
import Card from "../ui/Card.jsx";
import Btn from "../ui/Btn.jsx";
import Stars from "../ui/Stars.jsx";
import StarRating from "../ui/StarRating.jsx";

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ReviewsTab() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    setLoading(true);
    const { data, error: err } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (!err && data) setReviews(data);
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!service) {
      setError("Please select a service.");
      return;
    }
    if (rating < 1) {
      setError("Please select a star rating.");
      return;
    }
    if (text.trim().length < 15) {
      setError("Review must be at least 15 characters.");
      return;
    }

    setSubmitting(true);
    const avatar = getInitials(name);

    const { data, error: err } = await supabase
      .from("reviews")
      .insert([{ name: name.trim(), service, rating, text: text.trim(), avatar }])
      .select()
      .single();

    setSubmitting(false);

    if (err) {
      setError(err.message || "Failed to submit review. Please try again.");
      return;
    }

    if (data) setReviews((prev) => [data, ...prev]);
    setSuccess(true);
    setName("");
    setService("");
    setRating(0);
    setText("");
  }

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : "—";

  const uniqueStudents = new Set(reviews.map((r) => r.name.trim().toLowerCase())).size;

  const stats = [
    { label: "Total Reviews", value: reviews.length, color: PASTEL.purple, icon: "⭐" },
    { label: "Average Rating", value: avgRating, color: PASTEL.amber, icon: "★" },
    {
      label: "Students Helped",
      value: uniqueStudents > 0 ? uniqueStudents : "—",
      color: PASTEL.green,
      icon: "🎓",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 animate-fadeIn">
      <SectionHead
        chip="Student Reviews"
        chipColor={PASTEL.pink}
        title="What Students"
        highlight="Say"
        highlightColor={PASTEL.pink}
        sub="Real feedback from students who used these services."
      />

      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {stats.map((s) => (
          <Card
            key={s.label}
            className="p-5 text-center hover:-translate-y-1 transition-transform"
            style={{ background: s.color.bg }}
          >
            <span className="text-2xl block mb-2">{s.icon}</span>
            <p className="text-3xl font-black" style={{ color: s.color.text }}>
              {s.value}
            </p>
            <p className="text-sm text-gray-500 font-medium mt-1">{s.label}</p>
          </Card>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-16">
          <div
            className="inline-block w-10 h-10 border-4 rounded-full animate-spin mb-4"
            style={{ borderColor: PASTEL.purple.light, borderTopColor: PASTEL.purple.accent }}
          />
          <p className="text-gray-500 font-medium">Loading reviews...</p>
        </div>
      ) : reviews.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((r) => (
            <Card
              key={r.id}
              className="p-5 hover:-translate-y-1 transition-all duration-300 animate-fadeIn"
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #A78BFA, #F472B6)" }}
                >
                  {r.avatar || getInitials(r.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-gray-800 truncate">{r.name}</span>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: PASTEL.green.light, color: PASTEL.green.text }}
                    >
                      ✓ Verified
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{r.service}</p>
                  <p className="text-xs text-gray-400">{formatDate(r.created_at)}</p>
                </div>
              </div>
              <Stars n={r.rating} size="text-base" />
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">{r.text}</p>
            </Card>
          ))}
        </div>
      ) : (
        <Card
          className="p-10 text-center mb-12 animate-fadeIn"
          style={{ background: PASTEL.amber.bg }}
        >
          <span className="text-5xl block mb-3">⭐</span>
          <p className="font-bold text-lg" style={{ color: PASTEL.amber.text }}>
            No reviews yet — be the first to share your experience!
          </p>
        </Card>
      )}

      <Card className={`p-6 sm:p-8 max-w-2xl mx-auto ${success ? "success-pop" : ""}`}>
        <h3 className="text-xl font-black text-gray-800 mb-6">✍️ Share Your Experience</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Service</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white transition-shadow"
              >
                <option value="">Select service</option>
                {REVIEW_SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
            <StarRating value={rating} onChange={setRating} />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your review</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none transition-shadow"
              placeholder="Share your experience (min 15 characters)..."
            />
          </div>

          {error && (
            <div
              className="p-3 rounded-xl text-sm font-medium animate-fadeIn"
              style={{ background: PASTEL.rose.light, color: PASTEL.rose.text }}
            >
              {error}
            </div>
          )}
          {success && (
            <div
              className="p-3 rounded-xl text-sm font-medium success-pop"
              style={{ background: PASTEL.green.light, color: PASTEL.green.text }}
            >
              Thank you! Your review has been submitted successfully. ⭐
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <Btn
              color={PASTEL.purple}
              variant="primary"
              type="submit"
              className={submitting ? "opacity-70 pointer-events-none" : ""}
            >
              {submitting ? "Submitting..." : "Submit Review ⭐"}
            </Btn>
            <Btn color={PASTEL.green} variant="ghost" href={WA}>
              💬 WhatsApp
            </Btn>
          </div>
        </form>
      </Card>
    </div>
  );
}
