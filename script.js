
  const SUPABASE_URL = "https://mxiqonrtzhmqnunddrkj.supabase.co";
const SUPABASE_KEY = "তোমার Publishable Key";

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
