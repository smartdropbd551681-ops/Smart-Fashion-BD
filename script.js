const SUPABASE_URL = "https://mxiqonrtzhmqnunddrkj.supabase.co";

const SUPABASE_KEY = "sb_publishable_ZyPvH2HEd8eMrZ9v1qwZCg_HhuaH-NW";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("productForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const imageFile = document.getElementById("image").files[0];

    if (!imageFile) {
      alert("ছবি নির্বাচন করুন");
      return;
    }

    const fileName = Date.now() + "_" + imageFile.name;

    const { error: uploadError } = await supabase.storage
      .from("products")
      .upload(fileName, imageFile);

    if (uploadError) {
      alert(uploadError.message);
      return;
    }

    const image =
      `${SUPABASE_URL}/storage/v1/object/public/products/${fileName}`;

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
    } else {
      alert("✅ Product Published Successfully");
      form.reset();
    }

  });

});
