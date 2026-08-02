alert("script.js loaded");

  const SUPABASE_URL = "https://mxiqonrtzhmqnunddrkj.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZyPvH2HEd8eMrZ9v1qwZCg_HhuaH-NW";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("productForm");

  if (!form) {
    alert("productForm পাওয়া যায়নি");
    return;
  }

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    alert("Publish Button কাজ করছে");

  });

});
