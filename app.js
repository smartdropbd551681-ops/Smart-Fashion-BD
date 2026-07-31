const SUPABASE_URL = "https://mxiqonrtzhmqnunddrkj.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZyPvH2HEd8eMrZ9v1qwZCg_HhuaH-NW";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function loadProducts() {

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
}

loadProducts();
