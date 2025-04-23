import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdminUser() {
  try {
    // First, sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: "ceo@rancoded.com",
      password: "rancoded",
    });

    if (authError) {
      console.error("Error creating user:", authError.message);
      return;
    }

    if (!authData.user) {
      console.error("No user data returned");
      return;
    }

    // Update the profile to make them an admin
    const { error: profileError } = await supabase
      .from("profiles")
      .update({ is_admin: true })
      .eq("id", authData.user.id);

    if (profileError) {
      console.error("Error updating profile:", profileError.message);
      return;
    }

    console.log("Admin user created successfully!");
    console.log("Email: ceo@rancoded.com");
    console.log("Password: rancoded");
    console.log(
      "\nIMPORTANT: Please check your email for a verification link."
    );
    console.log(
      "After verifying your email, you can log in to the admin dashboard."
    );
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

createAdminUser();
