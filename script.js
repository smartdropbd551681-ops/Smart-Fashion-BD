const SUPABASE_URL = "https://mxiqonrtzhmqnunddrkj.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZyPvH2HEd8eMrZ9v1qwZCg_HhuaH-NW";
const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function publishProduct() {

  const name = document.getElementById("name").value.trim();
  const price = Number(document.getElementById("price").value);
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value.trim();

  const file = document.getElementById("image").files[0];

  if (!file) {
    alert("ছবি নির্বাচন করুন");
    return;
  }

  const fileName = Date.now() + "_" + file.name;

  const { error: uploadError } = await supabase.storage
    .from("products")
    .upload(fileName, file);

  if (uploadError) {
    alert(uploadError.message);
    return;
  }

  const image =
    SUPABASE_URL +
    "/storage/v1/object/public/products/" +
    fileName;

  const { error } = await supabase
    .from("products")
    .insert([
      {
        name,
        price,
        category,
        description,
        image
      }
    ]);

  if (error) {
    alert(error.message);
    return;
  }

  alert("✅ Product Published Successfully");

  document.getElementById("productForm").reset();
}

document
.getElementById("productForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  publishProduct();

});alert("script.js চলছে");
document.getElementById("publishBtn").addEventListener("click", function () {
    alert("Publish Button চাপা হয়েছে");
});
