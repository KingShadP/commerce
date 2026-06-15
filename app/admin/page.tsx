import { isAdminAuthenticated } from "lib/admin-auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  redirect(
    (await isAdminAuthenticated()) ? "/admin/design" : "/admin/login",
  );
}

