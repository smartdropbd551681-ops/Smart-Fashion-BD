const SUPABASE_URL = "https://mxiqonrtzhmqnunddrkj.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZyPvH2HEd8eMrZ9v1qwZCg_HhuaH-NW";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function publishProduct() {

  const name = document.getElementById("name").value.trim();
  const price = Number(document.getElementById("price").value);
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value.trim();

  const { error } = await supabase
    .from("products")
    .insert([
      {
        name: name,
        price: price,
        category: category,
        image: image
      }
    ]);

  if (error) {
    console.log(error);
    alert("❌ " + error.message);
    return;
  }

  alert("✅ Product Published Successfully!");
  document.getElementById("productForm").reset();
}
