const SUPABASE_URL = "https://mxiqonrtzhmqnunddrkj.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZyPvH2HEd8eMrZ9v1qwZCg_HhuaH-NW";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("productForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;

  const { error } = await supabase
    .from("products")
    .insert([{ name, price, category, image }]);

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("✅ Product Published Successfully");
    document.getElementById("productForm").reset();
  }
});
